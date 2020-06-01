import * as React from 'react';
// import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

// import { mq } from 'styles/_global.style';
// import { goToNextPage } from 'store/actions/navigation';

export interface INotFoundProp {
  title: string;
}

const NotFound = (props: INotFoundProp): React.ReactElement => {
  const {} = props;
  return (
    <>
      <NotFound.Layout>
        <h1>Page Not found</h1>
      </NotFound.Layout>
    </>
  );
};

NotFound.Layout = styled.section``;

export default NotFound;
