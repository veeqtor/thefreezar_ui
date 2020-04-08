import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SEO from 'modules/components/SEO';
import { goToNextPage, retrieveLastPageState } from 'store/actions/navigation';
import { IApplicationRootState } from 'types';
import Hero from 'modules/components/Home/Hero';
import Navigation from 'modules/components/Home/Navigation';
import styled from '@emotion/styled';
import Spinner from 'modules/components/Spinner';

export interface IHomepageProps {
  title: string;
}

const HomePage = ({ title }: IHomepageProps): React.ReactElement => {
  const [click, toggleClick] = React.useState(false);
  const dispatch = useDispatch();
  const currentLocation = useSelector((state: IApplicationRootState) => state.router.location);
  React.useEffect((): void => {
    if (click) {
      dispatch(retrieveLastPageState());
      dispatch(goToNextPage({ nextPageRoute: '/coming-soon' }));
    }
  });

  return (
    <>
      <SEO title={title} />
      <Navigation currentLocation={currentLocation.pathname} />
      <HomePage.Layout>
        <Hero />
        <div id="about">
          <span>Welcome Home!! {title}</span>
          <button onClick={(): void => toggleClick(!click)}>Click me</button>
          <p>{currentLocation.pathname}</p>
          <Spinner size="md" type="primary" />
        </div>
      </HomePage.Layout>
    </>
  );
};

HomePage.Layout = styled.main``;

export default HomePage;
