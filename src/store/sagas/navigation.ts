/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { NavigationTypes, savePageState } from '../actions/navigation';

export function* nextPage(action: any) {
  yield put(push(action.payload.nextPageRoute));
}

export function* loadCurrentPage() {
  const getRouter = (state: any) => state.router;
  const router = yield select(getRouter);
  yield put(savePageState({ data: router.location.state }));
}

export function* watchLoadCurrentPage() {
  yield takeLatest(NavigationTypes.NAVIGATION_RETRIEVE_REQUEST, loadCurrentPage);
}

export function* watchNextPage() {
  yield takeLatest(NavigationTypes.NAVIGATION_CHANGE, nextPage);
}
export default function* navigationSaga() {
  yield all([fork(watchNextPage), fork(watchLoadCurrentPage)]);
}
