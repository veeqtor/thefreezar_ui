import { NavigationTypes } from '../actions/navigation';
import { ContainerState, ContainerActions } from '../actions/navigation/types';

const initialState: ContainerState = {
  data: {},
  nextPageRoute: '',
  status: {
    isChanged: false,
    isRetrieved: false,
    isRetrieving: false,
  },
};

export default function navigationReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case NavigationTypes.NAVIGATION_RETRIEVE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isRetrieving: true,
        },
      };

    case NavigationTypes.NAVIGATION_RETRIEVED:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
        status: {
          ...state.status,
          isRetrieving: false,
          isRetrieved: true,
        },
      };

    case NavigationTypes.NAVIGATION_CHANGE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
        nextPageRoute: action.payload.nextPageRoute,
        status: {
          ...state.status,
          isRetrieved: false,
          isChanged: true,
        },
      };

    default:
      return state;
  }
}
