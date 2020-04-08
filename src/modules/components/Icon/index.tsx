import * as React from 'react';
import styled from '@emotion/styled';
import { fontSize, colors } from 'styles/_variables.style';

export declare type Size = 'sm' | 'md' | 'lg' | 'xlg';

interface IIconProps {
  iconType: string;
  iconSize?: Size;
  color?: string;
  handleClick?: () => void;
}

interface IWrapperProps {
  size: string;
  color?: string;
}

const Icon = ({ iconType, iconSize, color, handleClick }: IIconProps): React.ReactElement => {
  let size;
  switch (iconSize) {
    case 'sm':
      size = fontSize.sm;
      break;
    case 'md':
      size = fontSize.md;
      break;
    case 'lg':
      size = fontSize.lg;
      break;
    case 'xlg':
      size = fontSize.xlg;
      break;
    default:
      size = fontSize.normal;
  }
  return (
    <Icon.Wrapper
      className={`icon ion-${iconType}`}
      size={size}
      color={color}
      onClick={(): void => {
        if (handleClick) handleClick();
      }}
    />
  );
};

Icon.Wrapper = styled.i<IWrapperProps>`
  font-size: ${({ size }): string => size};
  color: ${({ color }): string => color || colors.WHITE};
`;

export default Icon;
