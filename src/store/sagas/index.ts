/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, fork } from 'redux-saga/effects';
import navigationSaga from 'store/sagas/navigation';
import homeSaga from 'store/sagas/home';
import sessionSaga from 'store/sagas/session';
import imageUploadSaga from 'store/sagas/dashboard/imageUpload';

export default function* rootSaga() {
  yield all([fork(navigationSaga), fork(homeSaga), fork(imageUploadSaga), fork(sessionSaga)]);
}
