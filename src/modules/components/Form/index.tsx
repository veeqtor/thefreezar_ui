/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import { validateWithJoi } from 'utils';
import Joi from '@hapi/joi';

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
}

interface IChildrenProps {
  values: Record<string, any>;
  touchedValues: Record<string, any>;
  errors: Record<string, any>;
  imagePickerlabelText?: string;
  handleChange: (event: IChangeEvent<FormInputType>) => void;
  handleBlur: (event: IChangeEvent<FormInputType>) => void;
  handleClearFormSelections: () => void;
}

const Form = (props: IFormProps): React.ReactElement<IFormProps> => {
  const { children, defaultValues, handelOnSubmit, onTouchValidationSchemas, onSubmitValidationSchema } = props;
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

  const handleBlur = (event: IChangeEvent<FormInputType>): void => {
    const {
      target: { name, value },
    } = event;

    setTouchedValues({
      ...touchedValues,
      [name]: true,
    });
    const err = onTouchValidationSchemas ? validateWithJoi(value, onTouchValidationSchemas[name]) : null;
    setErrors({
      ...errors,
      [name]: err,
    });
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
    };
  };

  return <Form.Wrapper onSubmit={handleSubmit}>{children(composeProps())}</Form.Wrapper>;
};

Form.Wrapper = styled.form`
  width: 100%;
`;

export default Form;
