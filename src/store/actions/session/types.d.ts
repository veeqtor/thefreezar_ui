import { ActionType } from 'typesafe-actions';
import * as actions from 'store/actions/session';
import { IApplicationRootState } from 'types';

type SessionPageActions = ActionType<typeof actions>;

interface ISessionPageState {
  readonly data: Record<string, unknown>;
  readonly meta: Record<string, unknown>;
  readonly status: {
    readonly isRetrieved: boolean;
    readonly isRetrieving: boolean;
    readonly failed: boolean;
  };
}

type RootState = IApplicationRootState;
type ContainerState = ISessionPageState;
type ContainerActions = SessionPageActions;

export { RootState, ContainerState, ContainerActions };
