/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeLatest, all, fork, put, call, select, take } from 'redux-saga/effects';
import { size, toArray } from 'lodash';
import axiosInstance from 'services';

import {
  imageUploadTypes,
  setUploadProgress,
  uploadImageFailure,
  uploadImageSuccess,
  removeUploaded,
} from 'store/actions/dashboard/imageUpload';
import { IApplicationRootState } from 'types';
import { AxiosRequestConfig } from 'axios';
import { eventChannel, END, EventChannel } from 'redux-saga';

function uploadFile(file: Record<string, any>, onProgress: (e: ProgressEvent) => void) {
  const url = '/image/';
  const data = new FormData();
  data.append('file', file.file, file.file.name);
  data.append('isPublic', file.isPublic);
  data.append('imageType', file.imageType);
  const config: AxiosRequestConfig = {
    onUploadProgress: onProgress,
  };
  return axiosInstance.post(url, data, config);
}

function createUploader(file: Record<string, any>): any {
  let emit: any;

  const chan = eventChannel(emitter => {
    emit = emitter;
    return (): void => {}; // it's necessarily. event channel should
    // return unsubscribe function. In our case
    // it's empty function
  });

  const uploadPromise = uploadFile(file, event => {
    if (event.total === 1) {
      emit(END);
    }
    const { loaded, total } = event;
    const percentageProgress = Math.floor((loaded / total) * 100);
    emit(percentageProgress);
  });

  return [uploadPromise, chan];
}

function* watchOnProgress(id: string, chan: EventChannel<unknown>) {
  while (true) {
    const progress = yield take(chan);
    yield put(setUploadProgress({ id, progress }));
  }
}

function* uploadSingleFile(payload: any) {
  const [uploadPromise, chan] = createUploader(payload);
  yield fork(watchOnProgress, payload.id, chan);
  try {
    yield call(() => uploadPromise);
    yield put(uploadImageSuccess({ id: payload.id }));
  } catch (err) {
    yield put(uploadImageFailure({ id: payload.id, err: err.request.response }));
  }
}

function* uploadImages(actions: any) {
  const getImages = (state: IApplicationRootState): any => state.imageUpload;
  const images = yield select(getImages);
  const imageToUpload = toArray(images.imageProgress).filter(file => file.progress === 0);
  actions.payload.clearForm();
  const promise: any[] = [];
  if (size(imageToUpload)) {
    imageToUpload.forEach(file => {
      promise.push(call(uploadSingleFile, file));
    });
    yield all(promise);
  }
}

function* retryUploadImages(actions: any) {
  const getImages = (state: IApplicationRootState): any => state.imageUpload;
  const images = yield select(getImages);
  const imageToUpload = toArray(images.imageProgress).filter(
    file => file.progress === 0 && file.id === actions.payload.id,
  );
  const payload = imageToUpload[0];
  yield call(uploadSingleFile, payload);
}

function* removeUploadedImage() {
  const getImages = (state: IApplicationRootState): any => state.imageUpload;
  const images = yield select(getImages);
  yield put(removeUploaded({ existingFiles: images.imageProgress, file: {} }));
}

export function* watchSetImageUploads() {
  yield takeLatest(imageUploadTypes.IMAGE_UPLOAD_SET_UPLOAD_FILES, uploadImages);
}

export function* watchRemoveUploaded() {
  yield takeLatest(imageUploadTypes.IMAGE_UPLOAD_SUCCESS, removeUploadedImage);
}

export function* watchRetryUploadImages() {
  yield takeLatest(imageUploadTypes.IMAGE_UPLOAD_RETRY, retryUploadImages);
}

export default function* imageUploadSaga() {
  yield all([fork(watchSetImageUploads), fork(watchRemoveUploaded), fork(watchRetryUploadImages)]);
}
