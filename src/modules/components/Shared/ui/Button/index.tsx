import * as React from 'react';
import styled from '@emotion/styled';
import { fontSize, colors } from 'styles/_variables.style';
import Spinner from 'modules/components/Shared/ui/Spinner';

declare type BType = 'button' | 'reset' | 'submit';
declare type ButtonType = 'block' | 'normal' | undefined;
declare type ButtonStyle = 'outline' | 'primary';

interface IButtonProps {
  title: string;
  type?: BType;
  disabled?: boolean;
  buttonSize?: string;
  buttonType?: ButtonType;
  buttonStyle: ButtonStyle;
  handleOnclick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface IButtonStyleProps {
  size: string;
  buttonType: ButtonType;
  buttonStyle: ButtonStyle;
  disabled: boolean;
}

const Button = (props: IButtonProps): React.ReactElement => {
  const { title, type, buttonSize, buttonType, buttonStyle, handleOnclick, disabled = false }: IButtonProps = props;
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
    <Button.Button
      type={type || 'button'}
      size={size}
      buttonType={buttonType}
      buttonStyle={buttonStyle}
      onClick={handleOnclick}
      disabled={disabled}
    >
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
  padding: 0.5125em 1em;
  height: 2.21875em;
  color: ${colors.WHITE};
  font-size: ${({ size }): string => size};
  cursor: pointer;
  border-radius: 3px;
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
  ${({ disabled }): string | false =>
    disabled &&
    `cursor: not-allowed;
     background: ${colors.GRAY};
     &:hover {
      background: ${colors.GRAY};
    }
`}
`;
export default Button;
