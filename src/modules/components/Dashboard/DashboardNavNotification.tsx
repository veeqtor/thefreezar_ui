import * as React from 'react';
import styled from '@emotion/styled';
import Icon from 'modules/components/Shared/ui/Icon';

const DashboardNavNotification = (): React.ReactElement => {
  return (
    <DashboardNavNotification.Wrapper>
      <div>
        <span>4</span>
        <Icon iconType={`ios-notifications`} iconSize="md" />
      </div>
    </DashboardNavNotification.Wrapper>
  );
};

DashboardNavNotification.Wrapper = styled.div`
  div {
    cursor: pointer;
    position: relative;

    span {
      position: absolute;
      top: -7px;
      right: 10px;
      background: red;
      border-radius: 4px;
      padding: 0.1em;
      width: 100%;
      height: auto;
      font-size: small;
      text-align: center;
    }
  }
`;

export default DashboardNavNotification;
