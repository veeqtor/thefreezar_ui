import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';

export interface ISessionsProp {
  title: string;
}

const Sessions = (props: ISessionsProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Sessions.Layout>
        <h1>Sessions Page</h1>
      </Sessions.Layout>
    </>
  );
};

Sessions.Layout = styled.section``;

export default Sessions;
