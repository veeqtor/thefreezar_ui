/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterState } from 'connected-react-router';
import { ContainerState as NavigationState } from 'store/actions/navigation/types';
import { ContainerState as HomeState } from 'store/actions/home/types';
import { ContainerState as SessionPageState } from 'store/actions/session/types';
import { ContainerState as ImageUploadState } from 'store/actions/dashboard/imageUpload/types';

export type Payload = Record<string, any>;

// Your root reducer type
export interface IApplicationRootState {
  readonly router: RouterState;
  readonly navigation: NavigationState;
  readonly landingPage: HomeState;
  readonly imageUpload: ImageUploadState;
  readonly sessionsPage: SessionPageState;
}
