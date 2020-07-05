import { HomeTypes } from 'store/actions/home';
import { ContainerState, ContainerActions } from 'store/actions/home/types';

const initialState: ContainerState = {
  data: {},
  status: {
    isRetrieved: false,
    isRetrieving: false,
    failed: false,
  },
};

export default function homeReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case HomeTypes.HOME_RETRIEVE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isRetrieving: true,
        },
      };

    case HomeTypes.HOME_RETRIEVE_SUCCESS:
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
    case HomeTypes.HOME_RETRIEVE_FAILED:
      return {
        ...state,
        data: {},
        status: {
          ...state.status,
          isRetrieving: false,
          isRetrieved: false,
          failed: true,
        },
      };
    default:
      return state;
  }
}
