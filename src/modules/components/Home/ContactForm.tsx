import * as React from 'react';
import styled from '@emotion/styled';
import Input from 'modules/components/Input';
import Textarea from 'modules/components/Textarea';
import Button from 'modules/components/Button';
import Form from 'modules/components/Form';
import { mq } from 'styles/_global.style';

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
    <Form handelOnSubmit={onSubmit} defaultValues={initialValues} validate={validate}>
      {({ values, handleChange, handleBlur }): React.ReactNode => {
        return (
          <ContactForm.Wrapper>
            <Input
              name="name"
              placeholder="Name"
              value={values.name}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={values.subject}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Write your message ..."
              value={values.message}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Button title="Send Message" type="submit" buttonType="block" buttonStyle="outline" />
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
