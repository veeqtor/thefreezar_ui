import styled from '@emotion/styled';
import { mq } from '../../styles/_global.style';
import BG from '../../assets/bg-coming-soon.png';

export const HeroWrapper = styled.section`
  background: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

export const Overlay = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.525);
  display: flex;
  justify-content: center;
`;

export const HeroTextWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto 1em;
  position: relative;

  ${mq[1]} {
    width: 75%;
  }
  ${mq[2]} {
    width: 45%;
  }

  p {
    margin: 0;
    ${mq[2]} {
      font-size: 0.9em;
    }
    &:first-of-type {
      font-size: 1.125em;
      &:after {
        display: inline-block;
        top: 10px;
        position: absolute;
        content: ' ';
        width: 45%;
        margin: auto 1em;
        border-bottom: 2px solid white;
      }
    }
  }
  h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: 0.125em;
    ${mq[2]} {
      font-size: 3em;
    }
  }
  span:after {
    display: inline-block;
    bottom: -2em;
    position: absolute;
    content: ' ';
    width: 100%;
    border-bottom: 2px solid white;
  }
`;
