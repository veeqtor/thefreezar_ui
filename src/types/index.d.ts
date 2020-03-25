/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterState } from 'connected-react-router';
import { ContainerState as NavigationState } from '../store/actions/navigation/types';

export type Payload = Record<string, any>;

// Your root reducer type
export interface IApplicationRootState {
  readonly router: RouterState;
  readonly navigation: NavigationState;
}
