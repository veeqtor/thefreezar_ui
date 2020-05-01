import { ActionType } from 'typesafe-actions';
import * as actions from 'store/actions/home';
import { IApplicationRootState } from 'types';

type HomeActions = ActionType<typeof actions>;

interface IHomeState {
  readonly data: Record<string, unknown>;
  readonly status: {
    readonly isRetrieved: boolean;
    readonly isRetrieving: boolean;
    readonly failed: boolean;
  };
}

type RootState = IApplicationRootState;
type ContainerState = IHomeState;
type ContainerActions = HomeActions;

export { RootState, ContainerState, ContainerActions };
