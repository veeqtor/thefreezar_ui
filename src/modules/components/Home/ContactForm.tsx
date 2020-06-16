import * as React from 'react';
import styled from '@emotion/styled';
import Input from 'modules/components/Shared/ui/Input';
import Textarea from 'modules/components/Shared/ui/Textarea';
import Button from 'modules/components/Shared/ui/Button';
import Form from 'modules/components/Form';
import { mq } from 'styles/_global.style';
import { validationSchemas } from 'utils';

const ContactForm = (): React.ReactElement => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const onSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };

  const validate = (value: string): boolean => {
    return !!value;
  };

  return (
    <Form
      feedbackInfo=""
      handelOnSubmit={onSubmit}
      defaultValues={initialValues}
      onTouchValidationSchemas={validate}
      onSubmitValidationSchema={validationSchemas.imageUploadOnSubmit}
    >
      {({ values, handleChange, handleBlur, errors }): React.ReactNode => {
        return (
          <ContactForm.Wrapper>
            <Input
              errorFeedback={errors}
              name="name"
              placeholder="Name"
              value={values.name}
              handleBlur={handleBlur}
              handleChange={handleChange}
              autoComplete="name"
            />
            <Input
              errorFeedback={errors}
              name="email"
              placeholder="Email"
              type="email"
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              autoComplete="email"
            />
            <Input
              errorFeedback={errors}
              name="subject"
              placeholder="Subject"
              value={values.subject}
              handleBlur={handleBlur}
              handleChange={handleChange}
              autoComplete="subject"
            />
            <Textarea
              name="message"
              placeholder="Write your message ..."
              value={values.message}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Button title="Send Message" type="submit" buttonType="block" buttonStyle="primary" />
          </ContactForm.Wrapper>
        );
      }}
    </Form>
  );
};

ContactForm.Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  ${mq[1]} {
    width: 400px;
  }
`;

export default ContactForm;
