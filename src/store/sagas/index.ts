/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, fork } from 'redux-saga/effects';
import navigationSaga from './navigation';

export default function* rootSaga() {
  yield all([fork(navigationSaga)]);
}
