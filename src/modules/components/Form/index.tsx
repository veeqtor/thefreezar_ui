/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { validateWithJoi } from 'utils';
import Joi from '@hapi/joi';
import { colors } from 'styles/_variables.style';

type FormInputType = HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement;
interface IEventTarget extends EventTarget {
  checked?: boolean;
  files?: FileList;
  selected?: any;
}

interface IChangeEvent<T = Element> extends React.ChangeEvent<T> {
  target: IEventTarget & T;
}
interface IFormProps {
  defaultValues: Record<string, any>;
  handelOnSubmit: Function;
  onTouchValidationSchemas?: Record<string, any>;
  onSubmitValidationSchema?: Joi.ObjectSchema;
  children: (props: IChildrenProps) => React.ReactNode;
  feedbackInfo: string;
}

interface IChildrenProps {
  values: Record<string, any>;
  touchedValues: Record<string, any>;
  errors: Record<string, any>;
  imagePickerlabelText?: string;
  handleChange: (event: IChangeEvent<FormInputType>) => void;
  handleBlur: (event: IChangeEvent<FormInputType>) => void;
  handleClearFormSelections: () => void;
  shouldDisableSubmitButton: () => boolean;
}

const Form = (props: IFormProps): React.ReactElement<IFormProps> => {
  const {
    children,
    defaultValues,
    handelOnSubmit,
    onTouchValidationSchemas,
    onSubmitValidationSchema,
    feedbackInfo,
  } = props;
  const [values, setValues] = React.useState(defaultValues || {});
  const [touchedValues, setTouchedValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [imagePickerlabelText, setImagePickerlabelText] = React.useState('');

  const handleChange = (event: IChangeEvent<FormInputType>): void => {
    event.persist();
    const {
      target: { name, type, checked, value, files },
    } = event;

    const getImagePickerLabel = (files: FileList): string => {
      switch (files.length) {
        case 1:
          return files && files[0].name;
        default:
          return (event.target.getAttribute('data-multiple-caption') || '').replace('{count}', String(files.length));
      }
    };

    const getValue = (type: string): any => {
      switch (type) {
        case 'checkbox':
          return checked;
        case 'file':
          const labelText = files ? getImagePickerLabel(files) : '';
          labelText && setImagePickerlabelText(labelText);
          return files;
        default:
          return value;
      }
    };

    setValues(prevState => ({
      ...prevState,
      [name]: getValue(type),
    }));
  };

  const handleClearFormSelections = (): void => {
    setValues(defaultValues || {});
    setErrors({});
    setTouchedValues({});
    setImagePickerlabelText('');
  };

  const shouldDisableSubmitButton = (): boolean => {
    const err = onSubmitValidationSchema ? validateWithJoi(values, onSubmitValidationSchema) : null;
    if (values && values['confirmPassword']) {
      return !!err || values['password'] !== values['confirmPassword'];
    }
    return !!err;
  };

  const handleBlur = (event: IChangeEvent<FormInputType>): void => {
    const {
      target: { name, value },
    } = event;

    setTouchedValues({
      ...touchedValues,
      [name]: true,
    });
    const err = onTouchValidationSchemas ? validateWithJoi(value, onTouchValidationSchemas[name]) : null;
    if (values && values['confirmPassword']) {
      values['password'] !== values['confirmPassword']
        ? setErrors({
            ...errors,
            confirmPassword: 'Passwords does not match',
          })
        : setErrors({
            ...errors,
            confirmPassword: undefined,
          });
    } else {
      setErrors({
        ...errors,
        [name]: err,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const err = onSubmitValidationSchema ? validateWithJoi(values, onSubmitValidationSchema) : null;
    setErrors({
      ...errors,
      err,
    });
    !err && handelOnSubmit({ data: values, err, clearForm: handleClearFormSelections });
  };
  const composeProps = (): IChildrenProps => {
    return {
      values,
      touchedValues,
      errors,
      handleChange,
      handleBlur,
      imagePickerlabelText,
      handleClearFormSelections,
      shouldDisableSubmitButton,
    };
  };

  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      <span>{feedbackInfo && feedbackInfo}</span>
      {children(composeProps())}
    </Form.Wrapper>
  );
};

Form.Wrapper = styled.form`
  width: 100%;
  > span {
    text-align: center;
    width: 100%;
    display: block;
    color: ${colors.ERROR};
  }
`;

export default Form;
