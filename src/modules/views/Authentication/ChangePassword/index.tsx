import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';
import Input from 'modules/components/Shared/ui/Input';
import Form from 'modules/components/Form';
import Button from 'modules/components/Shared/ui/Button';
import { validationSchemas } from 'utils';
import { spacing } from 'styles/_variables.style';
import AuthenticationPageLayout from 'modules/layouts/AuthenticationLayout';

export interface IResetPasswordPageProp {
  title: string;
  feedbackInfo: string;
}

const ResetPasswordPage = (props: IResetPasswordPageProp): React.ReactElement => {
  const { title, feedbackInfo } = props;
  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };

  return (
    <>
      <SEO title={title} />
      <AuthenticationPageLayout title={title}>
        <ResetPasswordPage.TextWrapper>
          <h3>Reset Password?</h3>
          <p>Please enter and confirm your new password to access your account</p>
        </ResetPasswordPage.TextWrapper>
        <Form
          handelOnSubmit={onSubmit}
          feedbackInfo={feedbackInfo}
          defaultValues={initialValues}
          onTouchValidationSchemas={validationSchemas.authentication.resetPassword}
          onSubmitValidationSchema={validationSchemas.genericSubmit(initialValues, true)}
        >
          {({ values, handleChange, handleBlur, errors, shouldDisableSubmitButton }): React.ReactNode => {
            return (
              <ResetPasswordPage.Wrapper>
                <Input
                  label="Password"
                  name="password"
                  placeholder="Enter your new password"
                  type="password"
                  value={values.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  required
                  errorFeedback={errors}
                  autoComplete="newPassword"
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
                <ResetPasswordPage.SubmitButtonWrapper>
                  <Button
                    isLoading={false}
                    title="Reset Password"
                    type="submit"
                    buttonType="block"
                    buttonStyle="primary"
                    disabled={shouldDisableSubmitButton()}
                  />
                </ResetPasswordPage.SubmitButtonWrapper>
              </ResetPasswordPage.Wrapper>
            );
          }}
        </Form>
      </AuthenticationPageLayout>
    </>
  );
};

ResetPasswordPage.Wrapper = styled.div`
  padding: 1em;
`;
ResetPasswordPage.TextWrapper = styled.div`
  padding: 0 1em;
  text-align: center;

  p {
    font-size: small;
  }

  h3 {
    font-family: Futura;
  }
`;

ResetPasswordPage.SubmitButtonWrapper = styled.div`
  margin-top: ${spacing.sm};
`;

export default ResetPasswordPage;
