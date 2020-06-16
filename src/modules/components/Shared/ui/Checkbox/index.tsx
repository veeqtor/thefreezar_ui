/** @jsx jsx */

import * as React from 'react';
import styled from '@emotion/styled';
import { colors, fontSize, spacing } from 'styles/_variables.style';
import { css } from '@emotion/core';
import { jsx } from '@emotion/core';
import { IInputProps } from 'modules/components/Shared/ui/Input';

const inputStyle = css`
  //Gotten from: https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='checkbox'],
    input[type='radio'] {
      --active: ${colors.PRIMARY};
      --active-inner: ${colors.WHITE};
      --focus: 2px rgba(39, 94, 254, 0.3);
      --border: ${colors.DARK_GRAY};
      --border-hover: #275efe;
      --background: ${colors.LIGHT_GRAY};
      --disabled: ${colors.GRAY};
      --disabled-inner: ${colors.WHITE};
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
      }
      &:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: 0.3s;
        --d-t: 0.6s;
        --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      &:disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: 0.9;
        &:checked {
          --b: var(--disabled-inner);
          --bc: var(--border);
        }
        & + label {
          cursor: not-allowed;
        }
      }
      &:hover {
        &:not(:checked) {
          &:not(:disabled) {
            --bc: var(--border-hover);
          }
        }
      }
      &:focus {
        box-shadow: 0 0 0 var(--focus);
      }
      &:not(.switch) {
        width: 20px;

        &:after {
          opacity: var(--o, 0);
        }
        &:checked {
          --o: 1;
        }
      }
      & + label {
        font-size: ${fontSize.normal};
        line-height: 20px;
        display: inline-block;
        cursor: pointer;
        margin-left: 10px;
      }
    }
    input[type='checkbox'] {
      &:not(.switch) {
        border-radius: 3px;

        &:after {
          width: 5px;
          height: 10px;
          border-radius: 3px;
          border: 2px solid var(--active-inner);
          border-top: 0;
          border-left: 0;
          left: 6px;
          top: 2px;
          transform: rotate(var(--r, 20deg));
        }

        &:checked {
          --r: 43deg;
        }
      }
      &.switch {
        width: 38px;
        border-radius: 11px;
        &:after {
          left: 2px;
          top: 2px;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          background: var(--ab, var(--border));
          transform: translateX(var(--x, 0));
        }
        &:checked {
          --ab: var(--active-inner);
          --x: 17px;
        }
        &:disabled {
          &:not(:checked) {
            &:after {
              opacity: 0.6;
            }
          }
        }
      }
    }
    input[type='radio'] {
      border-radius: 50%;

      &:after {
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: var(--active-inner);
        opacity: 0;
        transform: scale(var(--s, 0.7));
      }
      &:checked {
        --s: 0.5;
      }
    }
  }
`;

type InputType = 'radio' | 'checkbox';
type CheckboxType = 'normal' | 'switch';

export interface ICheckboxProps extends Omit<IInputProps, 'type' | 'autoComplete' | 'errorFeedback'> {
  type?: InputType;
  checkboxType?: CheckboxType;
  checked: boolean;
  disabled?: boolean;
}

const Checkbox = (props: ICheckboxProps): React.ReactElement => {
  const { name, label, checked, handleChange, handleBlur, value, type = 'checkbox', checkboxType, disabled } = props;
  return (
    <Checkbox.Wrapper css={inputStyle}>
      <Checkbox.Input
        name={name}
        id={name}
        type={type}
        value={value}
        checked={checked}
        onChange={handleChange}
        onBlur={handleBlur}
        className={checkboxType === 'switch' && type === 'checkbox' ? 'switch' : ''}
        disabled={disabled}
      />
      <Checkbox.Label htmlFor={name}>{label}</Checkbox.Label>
    </Checkbox.Wrapper>
  );
};

Checkbox.Wrapper = styled.div`
  margin-bottom: ${spacing.sm};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

Checkbox.Label = styled.label``;

Checkbox.Input = styled.input``;

export default Checkbox;
