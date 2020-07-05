/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, put, call } from 'redux-saga/effects';

import axiosInstance from 'services';
import { SessionTypes, sessionPageRetrieveSuccess, sessionPageRetrieveError } from 'store/actions/session';
import { errorHandler } from 'utils';

export function* callGetSessionPageData() {
  try {
    const { data } = yield call([axiosInstance, 'get'], '/studio/session');
    yield put(sessionPageRetrieveSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, sessionPageRetrieveError);
  }
}

export function* watchGetSessionPageData() {
  yield takeLatest(SessionTypes.SESSION_RETRIEVE_REQUEST, callGetSessionPageData);
}

export default function* navigationSaga() {
  yield all([fork(watchGetSessionPageData)]);
}
