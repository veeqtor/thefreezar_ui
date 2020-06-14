import * as React from 'react';
import styled from '@emotion/styled';

export interface ISettingsProp {
  title: string;
}

const Settings = (props: ISettingsProp): React.ReactElement => {
  const {} = props;
  return (
    <>
      <Settings.Layout>
        <h1>Settings Page</h1>
      </Settings.Layout>
    </>
  );
};

Settings.Layout = styled.section``;

export default Settings;
