import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';

export interface ISettingsProp {
  title: string;
}

const Settings = (props: ISettingsProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Settings.Layout>
        <h1>Settings Page</h1>
      </Settings.Layout>
    </>
  );
};

Settings.Layout = styled.section``;

export default Settings;
