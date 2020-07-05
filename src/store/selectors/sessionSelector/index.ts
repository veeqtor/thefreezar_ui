/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from 'reselect';
import { IApplicationRootState } from 'types';
import { ContainerState as SessionPageState } from 'store/actions/session/types';

const getSessionData = (state: IApplicationRootState): SessionPageState => state.sessionsPage;

export const selectSessionPageData = createSelector([getSessionData], (data: Record<string, any>) => {
  return data;
});
