import { css } from '@emotion/core';
import fonts from 'styles/fonts';

// Mobile, Tablet, Laptop, full screen
const breakpoints = [
  [320, 576], // SmartPhnes
  [768, 1024], // tablets
  [1200, 1600], // laptops
];
export const mq = breakpoints.map(
  bp =>
    `@media only screen and (min-device-width : ${bp[0]}px) and (max-device-width : ${bp[1]}px) and (-webkit-min-device-pixel-ratio: 1)`,
);

export default css`
  ${fonts}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Futura Lt BT', 'Fira Sans', sans-serif;
    font-size: 16px;
    ${mq[2]} {
      font-size: 20px;
    }
    ${mq[1]} {
      font-size: 18px;
    }
  }
  * {
    box-sizing: border-box;
  }
`;
