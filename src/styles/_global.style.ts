import { css } from '@emotion/core';
import fonts from 'styles/fonts';
import { colors } from 'styles/_variables.style';

const breakpoints = [
  320, // SmartPhnes
  640, // tablets
  768, // tablets
  1024, // laptops
];

/* If screen size is more than the breakpoint wide */
export const mq = breakpoints.map(bp => `@media screen and (min-width : ${bp}px)`);

export default css`
  ${fonts}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Futura Lt BT', 'Fira Sans', sans-serif;
    font-size: 16px;
    background: ${colors.BLACK};
    color: ${colors.WHITE};
    position: relative;
    min-height: 100vh;
    ${mq[2]} {
      font-size: 18px;
    }
    ${mq[1]} {
      font-size: 17px;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.DARKER_GRAY};
      border-radius: 2em;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${colors.LIGHT_GRAY};
      border-radius: 2em;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${colors.PRIMARY};
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-50%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(-50%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: all 1000ms ease-in-out;
  }
`;
