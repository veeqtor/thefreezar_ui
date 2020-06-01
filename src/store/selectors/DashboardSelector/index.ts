/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from 'reselect';
import { IApplicationRootState } from 'types';
import { ContainerState as NavigationState } from 'store/actions/navigation/types';

const getNavigationState = (state: IApplicationRootState): NavigationState => state.navigation;

export const selectNavigation = createSelector(getNavigationState, (data: Record<string, any>) => {
  return data;
});
