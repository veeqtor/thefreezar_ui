import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

const bgImgUrl =
  'https://images.pexels.com/photos/2332414/pexels-photo-2332414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

interface IHeroBackground {
  children: React.ReactNode;
}
const HeroBackground = ({ children }: IHeroBackground): React.ReactElement => {
  return (
    <HeroBackground.Wrapper>
      <HeroBackground.Overlay />
      {children}
    </HeroBackground.Wrapper>
  );
};

HeroBackground.Wrapper = styled.section`
  align-items: center;
  background: url(${bgImgUrl}) center;
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
