import * as React from 'react';
import styled from '@emotion/styled';
import { mq } from 'styles/_global.style';
import { Link } from 'react-router-dom';

const DashboardAvatar = (): React.ReactElement => {
  return (
    <DashboardAvatar.Wrapper>
      <DashboardAvatar.Name>
        <span>Test User</span>
      </DashboardAvatar.Name>
      <DashboardAvatar.Img>
        <Link to="/dashboard/profile">
          <img src="https://place-hold.it/40x40" alt="User"></img>
        </Link>
      </DashboardAvatar.Img>
    </DashboardAvatar.Wrapper>
  );
};

DashboardAvatar.Wrapper = styled.div`
  display: flex;
`;

DashboardAvatar.Name = styled.div`
  align-self: center;
  padding-right: 0.5em;
  display: none;

  ${mq[1]} {
    display: block
  }}
`;
DashboardAvatar.Img = styled.div`
  align-self: center;

  img {
    width: 35px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default DashboardAvatar;
