/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import { Link } from 'react-router-dom';
import { mq } from 'styles/_global.style';
import Social from 'modules/components/Home/Social';
import HeroBackground from 'modules/components/Home/HeroBackground';
import Swiper from 'react-id-swiper';

interface IHeroProps {
  heroUrls: Record<string, any>[];
}

const Hero = ({ heroUrls }: IHeroProps): React.ReactElement => {
  const params = {
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: false,
    speed: 2000,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
  };

  return (
    <HeroBackground bgUrls={heroUrls}>
      <Hero.Content>
        <Social />
        <Swiper {...params}>
          {heroUrls &&
            heroUrls.map((el, i) => (
              <Hero.Title key={i}>
                <Hero.Span>{el.caption.first}</Hero.Span>
                <Hero.Span>{el.caption.second}</Hero.Span>
              </Hero.Title>
            ))}
        </Swiper>
        <Hero.ButtonWrapper className="wow slideInRight" data-wow-duration="2s">
          <Hero.Button to="/booking">
            <span>Book </span>
            <span>Now</span>
          </Hero.Button>
        </Hero.ButtonWrapper>
        <Hero.Body className="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
          <p>
            we are proficient in establishing and documenting quality memories varying from pre-wedding photgraphs,
            pre-wedding video footages, wedding coverage; photo and video inclusive to post-wedding coverage.
          </p>
        </Hero.Body>
      </Hero.Content>
    </HeroBackground>
  );
};

Hero.Content = styled.div`
  margin: auto 0;
  max-width: 45em;
  width: 100%;
  padding: 6.25em 1em 0;
  z-index: 1;
  ${mq[2]} {
    margin: auto 10em;
  }
`;

Hero.Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
`;

Hero.Span = styled.span`
  font-size: 4.7125em;
  line-height: 0.75;
  font-family: 'Futura Bk BT';
  text-transform: uppercase;
  padding-left: 5%;
  &:last-child {
    padding-left: 25%;
  }

  ${mq[1]} {
    font-size: 6em;
    &:last-child {
      padding-left: 35%;
    }
  }

  ${mq[2]} {
    font-size: 8em;
    &:last-child {
      padding-left: 35%;
    }
  }
`;

Hero.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

Hero.Button = styled(Link)`
  display: flex;
  color: ${colors.WHITE};
  text-decoration: none;
  font-family: 'Futura Bk BT';
  span {
    border-radius: 0.188em;
    display: block;
    background: ${colors.PRIMARY};
    padding: 0.4em 1em;
    &:hover {
      background: ${colors.PRIMARY_HOVER};
    }
    &:first-of-type {
      border-bottom-right-radius: unset;
      border-top-right-radius: unset;
    }
    &:last-of-type {
      background: transparent;
      border: 0.063em solid ${colors.WHITE};
      border-left: unset;
      border-bottom-left-radius: unset;
      border-top-left-radius: unset;
    }
  }
`;

Hero.Body = styled(Hero.Title)`
  p {
    padding: 1em 0 1em 1em;
    border-left: 0.063em solid ${colors.PRIMARY};
  }
`;

export default Hero;
