import { createAction } from 'typesafe-actions';
import { imageUploadTypes } from 'store/actions/dashboard/imageUpload/imageUpload.constants';
import { Payload } from 'types';

const setUploadFiles = createAction(imageUploadTypes.IMAGE_UPLOAD_SET_UPLOAD_FILES)<{
  data: Payload;
  clearForm: Function;
}>();
const setUploadProgress = createAction(imageUploadTypes.IMAGE_UPLOAD_SET_UPLOAD_PROGRESS)<{
  id: string;
  progress: number;
}>();
const uploadImageSuccess = createAction(imageUploadTypes.IMAGE_UPLOAD_SUCCESS)<{ id: string }>();
const uploadImageFailure = createAction(imageUploadTypes.IMAGE_UOLOAD_FAILURE)<{
  id: string;
  err: string;
}>();
const removeUploaded = createAction(imageUploadTypes.IMAGE_UPLOAD_REMOVE)<{
  existingFiles: Payload | undefined;
  file: Payload | undefined;
}>();
const retryFailedUpload = createAction(imageUploadTypes.IMAGE_UPLOAD_RETRY)<{ id: string }>();

export {
  imageUploadTypes,
  setUploadFiles,
  setUploadProgress,
  uploadImageFailure,
  uploadImageSuccess,
  removeUploaded,
  retryFailedUpload,
};
