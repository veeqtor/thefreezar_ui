import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

declare type InputType = 'text' | 'password' | 'email';

interface ILabelAtrProps {
  htmlFor: string;
}

interface IInputProps {
  type?: InputType;
  name: string;
  placeholder?: string;
  label?: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps): React.ReactElement => {
  const { name, type, placeholder, label, value, handleChange, handleBlur } = props;
  return (
    <Input.Wrapper>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <Input.Input
        name={name}
        id={name}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Input.Wrapper>
  );
};

Input.Wrapper = styled.div`
  padding-bottom: 1em;
`;

Input.Label = styled.label<ILabelAtrProps>`
  padding: 0.6em 0;
  display: block;
`;

Input.Input = styled.input`
  width: 100%;
  padding: 0.85em;
  border-radius: 3px;
  border: 1px solid transparent;
  background: ${colors.LIGHT_GRAY};

  ::placeholder {
    font-size: 0.85rem;
    color: ${colors.DARK_GRAY};
  }

  &:focus {
    background: ${colors.WHITE};
  }
`;

export default Input;
