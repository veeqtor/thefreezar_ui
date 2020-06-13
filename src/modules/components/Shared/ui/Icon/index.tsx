import * as React from 'react';
import styled from '@emotion/styled';
import { fontSize, colors } from 'styles/_variables.style';

export declare type Size = 'sm' | 'md' | 'lg' | 'xlg';

interface IIconProps {
  props?: unknown[];
  iconType: string;
  iconSize?: Size;
  color?: string;
  hoverColor?: string;
  customClass?: string;
  handleClick?: () => void;
}

interface IWrapperProps {
  size: string;
  color?: string;
  hoverColor?: string;
  enableClickCursor?: boolean;
}

const Icon = ({
  iconType,
  iconSize,
  color,
  hoverColor,
  handleClick,
  customClass,
  ...props
}: IIconProps): React.ReactElement => {
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
      {...props}
      className={`icon ion-${iconType} ${customClass}`}
      size={size}
      style={{ backgroundImage: 'unset' }}
      color={color}
      hoverColor={hoverColor}
      enableClickCursor={!!handleClick}
      onClick={(): void => {
        if (handleClick) handleClick();
      }}
    />
  );
};

Icon.Wrapper = styled.i<IWrapperProps>`
  font-size: ${({ size }): string => size};
  color: ${({ color }): string => color || colors.WHITE};
  transition: all 300ms ease-in-out;
  ${({ enableClickCursor }): string => (enableClickCursor ? 'cursor: pointer' : '')};
  &:hover {
    color: ${({ hoverColor }): string => hoverColor || colors.WHITE};
  }
`;

export default Icon;
