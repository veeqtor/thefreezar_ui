import styled from '@emotion/styled';
import { WHITE } from '../../../styles/_colors.style';

const bgImgUrl =
  'https://images.pexels.com/photos/2332414/pexels-photo-2332414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const HomePageLayoutHeroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${bgImgUrl}) center;
  background-size: cover;
  background-position: center;
  color: ${WHITE};
`;

const HomePageLayoutHeroOverlay = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export { HomePageLayoutHeroWrapper, HomePageLayoutHeroOverlay };
