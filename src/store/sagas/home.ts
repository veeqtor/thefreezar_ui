/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, put, call } from 'redux-saga/effects';

import axiosInstance from 'services';
import { HomeTypes, homePageRetrieveSuccess, homePageRetrieveError } from 'store/actions/home';
import { errorHandler } from 'utils';

export function* callGetHomePageData() {
  try {
    const { data } = yield call([axiosInstance, 'get'], '/home');
    yield put(homePageRetrieveSuccess(data));
  } catch (error) {
    yield fork(errorHandler, error, homePageRetrieveError);
  }
}

export function* watchGetHomePageData() {
  yield takeLatest(HomeTypes.HOME_RETRIEVE_REQUEST, callGetHomePageData);
}

export default function* navigationSaga() {
  yield all([fork(watchGetHomePageData)]);
}
