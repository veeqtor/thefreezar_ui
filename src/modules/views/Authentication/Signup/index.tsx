import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';
import Input from 'modules/components/Shared/ui/Input';
import Form from 'modules/components/Form';
import Button from 'modules/components/Shared/ui/Button';
import { validationSchemas } from 'utils';
import Checkbox from 'modules/components/Shared/ui/Checkbox';
import { spacing } from 'styles/_variables.style';
import withAuthenticationContainer from 'modules/containers/withAuthenticationContainer';

export interface ISignupPage {
  title: string;
  onSubmit: Function;
  feedbackInfo: string;
}

const SignupPage = (props: ISignupPage): React.ReactElement => {
  const { title, onSubmit, feedbackInfo } = props;

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  };

  return (
    <>
      <SEO title={title} />
      <Form
        handelOnSubmit={onSubmit}
        feedbackInfo={feedbackInfo}
        defaultValues={initialValues}
        onTouchValidationSchemas={validationSchemas.authentication.signup}
        onSubmitValidationSchema={validationSchemas.authenticationOnSubmit}
      >
        {({ values, handleChange, handleBlur, errors, shouldDisableSubmitButton }): React.ReactNode => {
          return (
            <SignupPage.Wrapper>
              <Input
                label="Email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={values.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
                required
                errorFeedback={errors}
                autoComplete="Email"
              />
              <Input
                label="Password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={values.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                required
                errorFeedback={errors}
                autoComplete="current-password"
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                handleBlur={handleBlur}
                handleChange={handleChange}
                required
                errorFeedback={errors}
                autoComplete="confirm-password"
              />

              <SignupPage.FormFooter>
                <Checkbox
                  name="showPassword"
                  checked={values.showPassword}
                  value={values.showPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Show password"
                />
              </SignupPage.FormFooter>

              <SignupPage.SubmitButtonWrapper>
                <Button
                  title="Register"
                  type="submit"
                  buttonType="block"
                  buttonStyle="primary"
                  disabled={shouldDisableSubmitButton()}
                />
              </SignupPage.SubmitButtonWrapper>
            </SignupPage.Wrapper>
          );
        }}
      </Form>
    </>
  );
};

SignupPage.Wrapper = styled.div``;
SignupPage.SubmitButtonWrapper = styled.div`
  margin-top: ${spacing.sm};
`;
SignupPage.FormFooter = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: ${spacing.sm};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export default withAuthenticationContainer(SignupPage);
