import * as React from 'react';
import AuthenticationPageLayout from 'modules/layouts/AuthenticationLayout';
import { Tabs, TabPanel } from 'modules/components/Shared/ui/Tabs';
import LoginPage from 'modules/views/Authentication/Login';
import SignupPage from 'modules/views/Authentication/Signup';

export interface IAuthenticationPageProps {
  title: string;
}

const AuthenticationPage = (props: IAuthenticationPageProps): React.ReactElement => {
  const { title } = props;

  return (
    <>
      <AuthenticationPageLayout title={title}>
        <Tabs activeTab={{ id: 1 }}>
          <TabPanel id={1} title="Login">
            <LoginPage title={'Login'} />
          </TabPanel>
          <TabPanel id={2} title="Register">
            <SignupPage title={'Register'} />
          </TabPanel>
        </Tabs>
      </AuthenticationPageLayout>
    </>
  );
};

export default AuthenticationPage;
