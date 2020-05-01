/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { colors } from 'styles/_variables.style';

interface IHeroBackground {
  bgUrls?: Record<string, any>[];
  children: React.ReactNode;
}

const HeroBackground = ({ bgUrls, children }: IHeroBackground): React.ReactElement => {
  const params = {
    slidesPerView: 1,
    grabCursor: false,
    speed: 2000,
    loop: true,
    effect: 'fade',
    rebuildOnUpdate: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  };
  return (
    <Swiper {...params}>
      {bgUrls &&
        bgUrls.map((el, i) => (
          <HeroBackground.Wrapper key={i} imageUrl={el.url}>
            <HeroBackground.Overlay />
            {children}
          </HeroBackground.Wrapper>
        ))}
    </Swiper>
  );
};

HeroBackground.Wrapper = styled.section<{ imageUrl: string }>`
  align-items: center;
  background: url(${({ imageUrl }): string => imageUrl}) center;
  background-size: cover;
  background-position: center;
  color: ${colors.WHITE};
  display: flex;
  justify-content: center;
  align-item: center;
  min-height: 100vh;
`;
HeroBackground.Overlay = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export default HeroBackground;
