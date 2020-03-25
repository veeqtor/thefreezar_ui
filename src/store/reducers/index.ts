/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import navigation from './navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createRootReducer(history: any) {
  return combineReducers({
    router: connectRouter(history),
    navigation,
  });
}
