import * as React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { colors } from 'styles/_variables.style';
import { IPortfolioImageUrls } from 'modules/views/Home';

interface IHeroBackground {
  children: React.ReactNode;
}

const imageUrls: IPortfolioImageUrls[] = [
  {
    url:
      'https://images.pexels.com/photos/2332414/pexels-photo-2332414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
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
const HeroBackground = ({ children }: IHeroBackground): React.ReactElement => {
  const params = {
    slidesPerView: 1,
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
      reverseDirection: true,
    },
  };
  return (
    <Swiper {...params}>
      {imageUrls.map((url, i) => (
        <HeroBackground.Wrapper key={i} imageUrl={url.url}>
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
