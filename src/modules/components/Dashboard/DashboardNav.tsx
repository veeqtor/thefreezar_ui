import * as React from 'react';
import DashboardNavAvatar from 'modules/components/Dashboard/DashboardNavAvatar';
import DashboardNavNotification from 'modules/components/Dashboard/DashboardNavNotification';
import styled from '@emotion/styled';

const DashboardNav = (): React.ReactElement => {
  return (
    <DashboardNav.Wrapper>
      <DashboardNavNotification />
      <DashboardNavAvatar />
    </DashboardNav.Wrapper>
  );
};

DashboardNav.Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 0 1em;

    &:last-of-type {
      padding-right: unset;
    }
  }
`;

export default DashboardNav;
