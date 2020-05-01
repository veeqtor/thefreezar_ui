/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import SEO from 'modules/components/SEO';
import Hero from 'modules/components/Home/Hero';
import About from 'modules/components/Home/About';
import Portfolio from 'modules/components/Home/Portfolio';
import Contact from 'modules/components/Home/Contact';
import Services from 'modules/components/Home/Services';

import { homePageRetrieve } from 'store/actions/home';
import { selectHomePageData } from 'store/selectors';
import { IApplicationRootState } from 'types';
import withPageData from 'modules/HOC/withPageData';

export interface IHomepageProps {
  title: string;
  pageData: Record<string, any>;
}

interface IDataProp {
  hero: {
    map: (arg0: (el: any) => Record<string, any>) => React.SetStateAction<never[]>;
  };
  portfolio: {
    map: (arg0: (el: any) => Record<string, any>) => React.SetStateAction<never[]>;
  };
}

const HomePage = (props: IHomepageProps): React.ReactElement => {
  const [heroUrls, setHeroUrls] = React.useState([]);
  const [porfolioUrls, setPorfoliourls] = React.useState([]);
  const { title, pageData } = props;
  const transformData = (data: IDataProp) => {
    const hero = data.hero.map(el => {
      return {
        url: el.heroImage.imageUrl,
        caption: {
          first: el.heroCaption.substring(0, 4),
          second: el.heroCaption.substring(4),
        },
      };
    });

    const portfolio = data.portfolio.map(el => {
      return {
        url: el.portfolioImage.imageUrl,
        desc: el.portfolioDescription,
      };
    });

    setHeroUrls(hero);
    setPorfoliourls(portfolio);
  };

  React.useEffect(() => {
    transformData(pageData.data);
  }, []);

  return (
    <>
      <SEO title={title} />
      <HomePage.Layout>
        <Hero heroUrls={heroUrls} />
        <About />
        <Services />
        <Portfolio porfolioUrls={porfolioUrls} />
        <Contact />
      </HomePage.Layout>
    </>
  );
};

HomePage.Layout = styled.main``;

const mapStateToProps = (state: IApplicationRootState): Pick<IHomepageProps, 'pageData'> => ({
  pageData: selectHomePageData(state),
});

export default connect(mapStateToProps, null)(withPageData(HomePage, homePageRetrieve));
