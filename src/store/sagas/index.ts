/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, fork } from 'redux-saga/effects';
import navigationSaga from 'store/sagas/navigation';
import homeSaga from 'store/sagas/home';

export default function* rootSaga() {
  yield all([fork(navigationSaga), fork(homeSaga)]);
}
