import * as React from 'react';
import styled from '@emotion/styled';

export interface ISessionsProp {
  title: string;
}

const Sessions = (props: ISessionsProp): React.ReactElement => {
  const {} = props;
  return (
    <>
      <Sessions.Layout>
        <h1>Sessions Page</h1>
      </Sessions.Layout>
    </>
  );
};

Sessions.Layout = styled.section``;

export default Sessions;
