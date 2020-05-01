import { createAction } from 'typesafe-actions';
import { HomeTypes } from 'store/actions/home/home.constants';
import { Payload } from 'types';

const homePageRetrieve = createAction(HomeTypes.HOME_RETRIEVE_REQUEST)<undefined>();
const homePageRetrieveSuccess = createAction(HomeTypes.HOME_RETRIEVE_SUCCESS)<Payload>();
const homePageRetrieveError = createAction(HomeTypes.HOME_RETRIEVE_FAILED)<Payload>();

export { HomeTypes, homePageRetrieve, homePageRetrieveError, homePageRetrieveSuccess };
