import * as React from 'react';
import styled from '@emotion/styled';
import { fontSize, colors } from 'styles/_variables.style';

declare type BType = 'button' | 'reset' | 'submit';
declare type ButtonType = 'block' | 'normal' | undefined;
declare type ButtonStyle = 'outline' | 'primary';

interface IButtonProps {
  title: string;
  type?: BType;
  buttonSize?: string;
  buttonType?: ButtonType;
  buttonStyle: ButtonStyle;
}

interface IButtonStyleProps {
  size: string;
  buttonType: ButtonType;
  buttonStyle: ButtonStyle;
}

const Button = (props: IButtonProps): React.ReactElement => {
  const { title, type, buttonSize, buttonType, buttonStyle }: IButtonProps = props;
  let size;
  switch (buttonSize) {
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
    <Button.Button type={type || 'button'} size={size} buttonType={buttonType} buttonStyle={buttonStyle}>
      {title}
    </Button.Button>
  );
};

Button.Button = styled.button<IButtonStyleProps>`
  ${({ buttonType }): string =>
    buttonType === 'block'
      ? `display: block;
         width: 100%;`
      : ``}
  border-radius: 0.188em;
  padding: 0.4em 1em;
  color: ${colors.WHITE};
  font-size: ${({ size }): string => size};
  cursor: pointer;
  &:hover {
    background: ${colors.PRIMARY_HOVER};
  }
  ${({ buttonStyle }): string =>
    buttonStyle === 'outline'
      ? `border: 1px solid ${colors.WHITE};
         background: transparent;
         `
      : `border: unset;
         background: ${colors.PRIMARY};
        `}
`;
export default Button;
