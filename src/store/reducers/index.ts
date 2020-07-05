/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import navigation from 'store/reducers/navigation';
import landingPage from 'store/reducers/home';
import imageUpload from 'store/reducers/dashboard/imageUpload';
import sessionsPage from 'store/reducers/session';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createRootReducer(history: any) {
  return combineReducers({
    router: connectRouter(history),
    navigation,
    landingPage,
    imageUpload,
    sessionsPage,
  });
}
