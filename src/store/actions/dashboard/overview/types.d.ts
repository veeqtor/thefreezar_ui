/* eslint-disable @typescript-eslint/no-explicit-any */
export * from 'store/actions/dashboard/overview';
import { ActionType } from 'typesafe-actions';
import * as actions from 'store/actions/dashboard/overview';
import { IApplicationRootState } from 'types';

type OverviewActions = ActionType<typeof actions>;

interface IOverviewState {
  readonly data: Record<string, any>;
  readonly status: {
    readonly isRetrieved: boolean;
    readonly isRetrieving: boolean;
    readonly failed: boolean;
  };
}

type RootState = IApplicationRootState;
type ContainerState = IOverviewState;
type ContainerActions = OverviewActions;

export { RootState, ContainerState, ContainerActions };
