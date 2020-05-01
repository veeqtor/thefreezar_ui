/* eslint-disable @typescript-eslint/no-explicit-any */
import { put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function* errorHandler(error: AxiosError, errorCb: (arg0: any) => any) {
  console.log(error.request.response);
  yield put(errorCb(error.request.response));
}
