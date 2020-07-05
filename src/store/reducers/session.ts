import { SessionTypes } from 'store/actions/session';
import { ContainerState, ContainerActions } from 'store/actions/session/types';

const initialState: ContainerState = {
  data: {},
  meta: {},
  status: {
    isRetrieved: false,
    isRetrieving: false,
    failed: false,
  },
};

export default function sessionReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case SessionTypes.SESSION_RETRIEVE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isRetrieving: true,
        },
      };

    case SessionTypes.SESSION_RETRIEVE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data.results,
        },
        meta: {
          ...state.meta,
          ...action.payload.meta,
        },
        status: {
          ...state.status,
          isRetrieving: false,
          isRetrieved: true,
        },
      };
    case SessionTypes.SESSION_RETRIEVE_FAILED:
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
