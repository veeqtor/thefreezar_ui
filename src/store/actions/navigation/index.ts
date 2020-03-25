import { createAction } from 'typesafe-actions';
import { NavigationTypes } from './navigation.constants';
import { Payload } from '../../../types';

const retrieveLastPageState = createAction(NavigationTypes.NAVIGATION_RETRIEVE_REQUEST)<undefined>();
const savePageState = createAction(NavigationTypes.NAVIGATION_RETRIEVED)<Payload>();
const goToNextPage = createAction(NavigationTypes.NAVIGATION_CHANGE)<Payload>();

export { NavigationTypes, goToNextPage, retrieveLastPageState, savePageState };
