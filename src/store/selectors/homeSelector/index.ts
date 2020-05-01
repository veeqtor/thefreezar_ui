/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from 'reselect';
import { IApplicationRootState } from 'types';
import { ContainerState as HomeState } from 'store/actions/home/types';

const getHomeData = (state: IApplicationRootState): HomeState => state.landingPage;

export const selectHomePageData = createSelector([getHomeData], (data: Record<string, any>) => {
  return data;
});
