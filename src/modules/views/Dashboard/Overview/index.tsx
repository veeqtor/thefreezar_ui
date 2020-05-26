import * as React from 'react';
// import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

// import { mq } from 'styles/_global.style';
// import { goToNextPage } from 'store/actions/navigation';

export interface IOverviewProp {
  title: string;
}

const Overview = (props: IOverviewProp): React.ReactElement => {
  const {} = props;
  return (
    <>
      <Overview.Layout>
        <h1>Overview page</h1>
      </Overview.Layout>
    </>
  );
};

Overview.Layout = styled.section``;

export default Overview;
