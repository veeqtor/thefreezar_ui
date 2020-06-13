/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionType } from 'typesafe-actions';
import * as actions from 'store/actions/dashboard/imageUpload';
import { IApplicationRootState } from 'types';

type OverviewActions = ActionType<typeof actions>;

interface IUploadImageState {
  readonly imageProgress: Record<string, any>;
  readonly status: {
    readonly hasUploaded: boolean;
    readonly isUploading: boolean;
    readonly uploadFailed: boolean;
  };
}

type RootState = IApplicationRootState;
type ContainerState = IUploadImageState;
type ContainerActions = OverviewActions;

export { RootState, ContainerState, ContainerActions };
