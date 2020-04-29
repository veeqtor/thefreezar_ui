import * as React from 'react';
import { useSelector /* useDispatch */ } from 'react-redux';

import SEO from 'modules/components/SEO';
// import { goToNextPage, retrieveLastPageState } from 'store/actions/navigation';
import { IApplicationRootState } from 'types';
import Navigation from 'modules/components/Home/Navigation';
import styled from '@emotion/styled';
import Hero from 'modules/components/Home/Hero';
import About from 'modules/components/Home/About';
import Portfolio from 'modules/components/Home/Portfolio';
import Contact from 'modules/components/Home/Contact';
import Services from 'modules/components/Home/Services';
import Footer from 'modules/components/Home/Footer';

export interface IHomepageProps {
  title: string;
}

export interface IPortfolioImageUrls {
  url: string;
}

const HomePage = ({ title }: IHomepageProps): React.ReactElement => {
  const currentLocation = useSelector((state: IApplicationRootState) => state.router.location);
  // const dispatch = useDispatch();
  // React.useEffect((): void => {
  //   if (click) {
  //     dispatch(retrieveLastPageState());
  //     dispatch(goToNextPage({ nextPageRoute: '/coming-soon' }));
  //   }
  // });

  const imageUrls: IPortfolioImageUrls[] = [
    {
      url:
        'https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?cs=srgb&dl=grayscale-photography-of-woman-s-face-1441151.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      url:
        'https://images.pexels.com/photos/3886346/pexels-photo-3886346.jpeg?cs=srgb&dl=woman-with-green-hair-3886346.jpg&fm=jpg',
    },
    {
      url:
        'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
    },
    {
      url:
        'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
    },
    {
      url:
        'https://images.pexels.com/photos/3746214/pexels-photo-3746214.jpeg?cs=srgb&dl=person-in-red-long-sleeve-shirt-holding-white-flowers-3746214.jpg&fm=jpg',
    },
    {
      url:
        'https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?cs=srgb&dl=close-up-photo-of-smiling-woman-with-her-eyes-closed-posing-2552127.jpg&fm=jpg',
    },
    {
      url:
        'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
    },
  ];

  return (
    <>
      <SEO title={title} />
      <Navigation currentLocation={currentLocation.pathname} />
      <HomePage.Layout>
        <Hero />
        <About />
        <Services />
        <Portfolio imageUrls={imageUrls} />
        <Contact />
        <Footer />
      </HomePage.Layout>
    </>
  );
};

HomePage.Layout = styled.main``;

export default HomePage;
