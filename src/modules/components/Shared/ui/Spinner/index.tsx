/** @jsx jsx */

import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, keyframes } from '@emotion/core';
import { colors } from 'styles/_variables.style';
import { Size } from 'modules/components/Shared/ui/Icon';

export const spin = keyframes`
to {
    transform: rotate(360deg);
  }`;

export declare type type = 'primary' | 'secondary';

interface ISpinnerWrapper {
  size?: Size | undefined;
  type?: type;
  isTransparent?: boolean;
}

interface ISpinnerProps {
  size?: Size;
  type?: type;
  isTransparent?: boolean;
}
const Spinner = ({ size, type, isTransparent = false }: ISpinnerProps): React.ReactElement => (
  <Spinner.Wrapper size={size} type={type} isTransparent={isTransparent} />
);

Spinner.Wrapper = styled.div<ISpinnerWrapper>`
background: ${({ isTransparent }): string => (isTransparent ? 'transparent' : colors.BLACK)};
height: 100vh;
z-index: 1000;
position: relative;
&::before {
    position: absolute;
    top: 50%;
    left: 50%;
    ${({ size }): string => {
      switch (size) {
        case 'sm':
          return `
          width: 1rem;
          height: 1rem;
          margin-top: -0.5rem;
          margin-left: -0.5rem;`;
        case 'md':
          return `
          width: 1.563em;
          height: 1.563em;
          `;
        default:
          return `
          width: 60px;
          height: 60px;
          margin-top: -4.125rem;
          margin-left: -1.875em;`;
      }
    }}
    box-sizing: border-box;
    border-top: 0.188em solid ${({ type }): string => (type == 'primary' ? colors.PRIMARY : colors.DARK_GRAY)};
    border-right: 2px solid transparent;
    border-radius: 50%;
    content: ' ';
    animation: ${spin} 1s ease infinite;
`;

export default Spinner;
