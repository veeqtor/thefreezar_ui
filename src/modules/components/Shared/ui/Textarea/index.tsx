import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

interface ITextareaProps {
  name: string;
  placeholder?: string;
  label?: string;
  rows?: number;
  cols?: number;
  value: string | number | undefined;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: ITextareaProps): React.ReactElement => {
  const { name, placeholder, label, rows, cols, value, handleChange, handleBlur } = props;
  return (
    <Textarea.Wrapper>
      <Textarea.Label htmlFor={name}>{label}</Textarea.Label>
      <Textarea.Textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows || 4}
        cols={cols || 50}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Textarea.Wrapper>
  );
};

Textarea.Wrapper = styled.div`
  padding-bottom: 1em;
`;

Textarea.Label = styled.label`
  padding: 0.6em 0;
  display: block;
`;

Textarea.Textarea = styled.textarea`
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

export default Textarea;
