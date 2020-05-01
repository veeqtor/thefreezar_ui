/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { colors } from 'styles/_variables.style';
import { mq } from 'styles/_global.style';
import Icon from 'modules/components/Shared/ui/Icon';

interface IPortfolioImgWrapper {
  imageUrl: string;
}

interface IPortfolioProps {
  porfolioUrls: Record<string, any>[];
}

const Portfolio = ({ porfolioUrls }: IPortfolioProps): React.ReactElement => {
  const params = {
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    rebuildOnUpdate: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    renderPrevButton: (): React.ReactElement => (
      <Icon customClass="swiper-button-prev" iconType="ios-arrow-dropleft-circle" iconSize="lg" />
    ),
    renderNextButton: (): React.ReactElement => (
      <Icon customClass="swiper-button-next" iconType="ios-arrow-dropright-circle" iconSize="lg" />
    ),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <Portfolio.Wrapper id="portfolio">
      <Portfolio.PortfolioText>
        <span>Portfolio</span>
      </Portfolio.PortfolioText>
      <Portfolio.Header>
        <h2>Our work</h2>
      </Portfolio.Header>
      <Portfolio.Content>
        <Swiper {...params}>
          {porfolioUrls && porfolioUrls.map((el, i) => <Portfolio.Img key={i} imageUrl={el.url} />)}
        </Swiper>
      </Portfolio.Content>
    </Portfolio.Wrapper>
  );
};

Portfolio.Wrapper = styled.section`
  overflow-x: hidden;
  position: relative;
  text-align: center;
  padding: 3em 1em;
  border-top: 1px solid ${colors.DARKER_GRAY};
  min-height: 500px;
  width: 100%;

  ${mq[1]} {
    padding: 5em;
  }
`;

Portfolio.PortfolioText = styled.div`
  position: absolute;
  color: ${colors.DARKER_GRAY};
  top: 5%;
  left: 15%;
  span {
    font-size: 3em;
    font-family: Futura;
    text-transform: uppercase;
    ${mq[1]} {
      font-size: 7em;
    }
  }
  ${mq[1]} {
    left: 25%;
    top: 5%;
  }
  ${mq[2]} {
    left: 15%;
  }
`;

Portfolio.Header = styled.div`
  color: ${colors.GRAY};
  position: relative;
  margin-bottom: 3em;
`;

Portfolio.Img = styled.div<IPortfolioImgWrapper>`
  height: 30em;
  background-image: url(${({ imageUrl }): string => imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

Portfolio.Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
`;

export default Portfolio;
