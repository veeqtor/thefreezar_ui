import { css } from '@emotion/core';
import fonts from 'styles/fonts';

const breakpoints = [
  550, // SmartPhnes
  768, // tablets
  1024, // laptops
];

export const mq = breakpoints.map(bp => `@media only screen and (min-device-width : ${bp}px)`);

export default css`
  ${fonts}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Futura Lt BT', 'Fira Sans', sans-serif;
    font-size: 16px;
    ${mq[2]} {
      font-size: 18px;
    }
    ${mq[1]} {
      font-size: 17px;
    }
  }
  * {
    box-sizing: border-box;
  }
`;
