/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';

interface IFormProps {
  defaultValues: Record<string, any>;
  handelOnSubmit: Function;
  validate: Function;
  children: (props: IChildrenProps) => React.ReactNode;
}

interface IChildrenProps {
  values: Record<string, any>;
  touchedValues: Record<string, any>;
  errors: Record<string, any>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Form = (props: IFormProps): React.ReactElement<IFormProps> => {
  const { children, defaultValues, handelOnSubmit, validate } = props;
  const [values, setValues] = React.useState(defaultValues || {});
  const [touchedValues, setTouchedValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const {
      target: { name, value },
    } = event;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const {
      target: { name, value },
    } = event;
    setTouchedValues({
      ...touchedValues,
      [name]: true,
    });

    const err = validate(value);
    setErrors({
      ...errors,
      [name]: err,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const err = validate(values);
    setErrors({
      ...errors,
      ...err,
    });
    handelOnSubmit({ data: values, err });
  };
  const composeProps = (): IChildrenProps => {
    return {
      values,
      touchedValues,
      errors,
      handleChange,
      handleBlur,
    };
  };

  return <Form.Wrapper onSubmit={handleSubmit}>{children(composeProps())}</Form.Wrapper>;
};

Form.Wrapper = styled.form`
  width: 100%;
`;

export default Form;