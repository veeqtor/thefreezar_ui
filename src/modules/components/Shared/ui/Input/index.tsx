import * as React from 'react';
import styled from '@emotion/styled';
import { colors, fontSize, spacing } from 'styles/_variables.style';

declare type InputType = 'text' | 'password' | 'email';

interface ILabelAtrProps {
  htmlFor: string;
  required: boolean;
}

export interface IInputProps {
  type?: InputType;
  name: string;
  placeholder?: string;
  label?: string;
  value: string | number;
  required?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorFeedback: Record<string, string>;
  autoComplete: string;
}

const Input = (props: IInputProps): React.ReactElement => {
  const {
    name,
    type,
    placeholder,
    label,
    value,
    handleChange,
    handleBlur,
    required = false,
    errorFeedback,
    autoComplete,
  } = props;
  return (
    <Input.Wrapper>
      <Input.Label htmlFor={name} required={required}>
        {label}
      </Input.Label>
      <Input.Input
        name={name}
        id={name}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        autoComplete={autoComplete}
      />
      {errorFeedback && (
        <Input.Error>
          <span>{errorFeedback[name]}</span>
        </Input.Error>
      )}
    </Input.Wrapper>
  );
};

Input.Wrapper = styled.div`
  margin-bottom: ${spacing.sm};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

Input.Label = styled.label<ILabelAtrProps>`
  display: block;
  font-size: ${fontSize.sm};
  position: relative;

  &::after {
    position: absolute;
    content: '*';
    top: 0;
    display: ${({ required }): string => (required ? 'inline' : 'none')};
    padding-left: 0.2em;
    color: ${colors.ERROR};
  }
`;

Input.Input = styled.input`
  width: 100%;
  padding: 0.85em;
  margin: 0.2em 0;
  border-radius: 3px;
  background: ${colors.LIGHT_GRAY};
  border: none;
  outline: none;

  ::placeholder {
    font-size: 0.85rem;
    color: ${colors.DARK_GRAY};
  }

  &:focus {
    background: ${colors.WHITE};
  }
`;

Input.Error = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-size: ${fontSize.xsm};
    color: ${colors.ERROR};
  }
`;

export default Input;
