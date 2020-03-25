import { ActionType } from 'typesafe-actions';
import * as actions from '.';
import { IApplicationRootState } from '../../../types';

type NavigationActions = ActionType<typeof actions>;

interface INavigationState {
  readonly data: Record<string, unknown>;
  readonly nextPageRoute: string;
  readonly status: {
    readonly isChanged: boolean;
    readonly isRetrieved: boolean;
    readonly isRetrieving: boolean;
  };
}

type RootState = IApplicationRootState;
type ContainerState = INavigationState;
type ContainerActions = NavigationActions;

export { RootState, ContainerState, ContainerActions };
