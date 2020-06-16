import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';
import Input from 'modules/components/Shared/ui/Input';
import Form from 'modules/components/Form';
import Button from 'modules/components/Shared/ui/Button';
import { validationSchemas } from 'utils';
import { spacing, colors } from 'styles/_variables.style';
import AuthenticationPageLayout from 'modules/layouts/AuthenticationLayout';
import Icon from 'modules/components/Shared/ui/Icon';
import { Link } from 'react-router-dom';

export interface IForgotPasswordPageProp {
  title: string;
  feedbackInfo: string;
}

const ForgotPasswordPage = (props: IForgotPasswordPageProp): React.ReactElement => {
  const { title, feedbackInfo } = props;
  const initialValues = {
    email: '',
  };

  const onSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };

  return (
    <>
      <SEO title={title} />
      <AuthenticationPageLayout title={title}>
        <ForgotPasswordPage.TextWrapper>
          <h3>Forgot Password?</h3>
          <p>Enter your email and we will email you a link to reset your password.</p>
        </ForgotPasswordPage.TextWrapper>
        <Form
          handelOnSubmit={onSubmit}
          feedbackInfo={feedbackInfo}
          defaultValues={initialValues}
          onTouchValidationSchemas={validationSchemas.authentication.forgotpassword}
          onSubmitValidationSchema={validationSchemas.genericSubmit(initialValues, true)}
        >
          {({ values, handleChange, handleBlur, errors, shouldDisableSubmitButton }): React.ReactNode => {
            return (
              <ForgotPasswordPage.Wrapper>
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
                <ForgotPasswordPage.SubmitButtonWrapper>
                  <Button
                    isLoading={false}
                    title="Send request"
                    type="submit"
                    buttonType="block"
                    buttonStyle="primary"
                    disabled={shouldDisableSubmitButton()}
                  />
                </ForgotPasswordPage.SubmitButtonWrapper>
                <ForgotPasswordPage.FooterWrapper>
                  <Link to="/auth">
                    <Icon iconType="ios-arrow-back" iconSize="md" />
                    <span>Go back to login</span>
                  </Link>
                </ForgotPasswordPage.FooterWrapper>
              </ForgotPasswordPage.Wrapper>
            );
          }}
        </Form>
      </AuthenticationPageLayout>
    </>
  );
};

ForgotPasswordPage.Wrapper = styled.div`
  padding: 1em;
`;
ForgotPasswordPage.TextWrapper = styled.div`
  padding: 1em;
  text-align: center;

  p {
    font-size: small;
  }

  h3 {
    font-family: Futura;
  }

  a {
    text-decoration: none;
    color: ${colors.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      padding-right: ${spacing.xsm};
    }
  }
`;

ForgotPasswordPage.FooterWrapper = ForgotPasswordPage.TextWrapper.withComponent('div');

ForgotPasswordPage.SubmitButtonWrapper = styled.div`
  margin-top: ${spacing.sm};
`;

export default ForgotPasswordPage;
