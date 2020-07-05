import { createAction } from 'typesafe-actions';
import { SessionTypes } from 'store/actions/session/session.constant';
import { Payload } from 'types';

const sessionPageRetrieve = createAction(SessionTypes.SESSION_RETRIEVE_REQUEST)<undefined>();
const sessionPageRetrieveSuccess = createAction(SessionTypes.SESSION_RETRIEVE_SUCCESS)<Payload>();
const sessionPageRetrieveError = createAction(SessionTypes.SESSION_RETRIEVE_FAILED)<Payload>();

export { SessionTypes, sessionPageRetrieve, sessionPageRetrieveSuccess, sessionPageRetrieveError };
