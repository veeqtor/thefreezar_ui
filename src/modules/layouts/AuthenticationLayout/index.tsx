import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import HomePagesLayout from 'modules/layouts/HomePagesLayout';
import { mq } from 'styles/_global.style';

export interface ISignupPage {
  title: string;
  children: React.ReactNode;
}

const AuthenticationPageLayout = (props: ISignupPage): React.ReactElement => {
  const { children } = props;
  return (
    <>
      <HomePagesLayout title={''}>
        <AuthenticationPageLayout.Wrapper>
          <AuthenticationPageLayout.InnerWrapper>{children}</AuthenticationPageLayout.InnerWrapper>
        </AuthenticationPageLayout.Wrapper>
      </HomePagesLayout>
    </>
  );
};

AuthenticationPageLayout.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

AuthenticationPageLayout.InnerWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid ${colors.DARKER_GRAY};
  border-radius: 3px;
  border: 1px solid #2f2f2f;
  width: 100%;
  margin: 0 auto;

  ${mq[1]} {
    width: 400px;
  }
`;

export default AuthenticationPageLayout;
