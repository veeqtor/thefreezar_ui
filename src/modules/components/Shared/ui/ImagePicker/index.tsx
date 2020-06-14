/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { IInputProps } from 'modules/components/Shared/ui/Input';
import { colors } from 'styles/_variables.style';

export interface IImagePickerProps extends Pick<IInputProps, 'handleChange' | 'handleBlur' | 'name' | 'value'> {
  multiple?: boolean;
  label: any;
}

export default function ImagePicker(props: IImagePickerProps): React.ReactElement<IImagePickerProps> {
  const { handleChange, label, handleBlur, name, multiple = true, value } = props;
  return (
    <ImagePicker.Wrapper>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="file"
        name={name}
        id={name}
        accept="image/x-png,image/gif,image/jpeg"
        multiple={multiple}
        value={value}
        data-multiple-caption="{count} images selected"
      />
      <label htmlFor={name}>{label ? label : 'Select a file...'}</label>
    </ImagePicker.Wrapper>
  );
}

ImagePicker.Wrapper = styled.div`
  position: relative;
  padding-bottom: 1em;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    & + label {
      height: 2.21875em;
      border-radius: 3px;
      width: 100%;
      background-color: ${colors.PRIMARY};
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      * {
        pointer-events: none;
      }

      :hover {
        background-color: ${colors.PRIMARY_HOVER};
      }
    }
    &:focus + label {
      outline: 1px dotted ${colors.LIGHT_GRAY};
      outline: -webkit-focus-ring-color auto 5px;
    }
  }
`;
