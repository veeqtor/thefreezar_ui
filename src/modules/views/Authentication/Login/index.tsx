import * as React from 'react';
import styled from '@emotion/styled';
import SEO from 'modules/components/SEO';
import Input from 'modules/components/Shared/ui/Input';
import Form from 'modules/components/Form';
import Button from 'modules/components/Shared/ui/Button';
import { validationSchemas } from 'utils';
import Checkbox from 'modules/components/Shared/ui/Checkbox';
import { mq } from 'styles/_global.style';
import { spacing, colors } from 'styles/_variables.style';
import { Link } from 'react-router-dom';
import withAuthenticationContainer from 'modules/containers/withAuthenticationContainer';

export interface ILoginPage {
  title: string;
  onSubmit: Function;
  feedbackInfo: string;
}

const LoginPage = (props: ILoginPage): React.ReactElement => {
  const { title, onSubmit, feedbackInfo } = props;

  const initialValues = {
    email: '',
    password: '',
    showPassword: false,
  };

  return (
    <>
      <SEO title={title} />
      <Form
        handelOnSubmit={onSubmit}
        feedbackInfo={feedbackInfo}
        defaultValues={initialValues}
        onTouchValidationSchemas={validationSchemas.authentication.login}
        onSubmitValidationSchema={validationSchemas.authenticationOnSubmit}
      >
        {({ values, handleChange, handleBlur, errors, shouldDisableSubmitButton }): React.ReactNode => {
          return (
            <LoginPage.Wrapper>
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
                autoComplete="current-pasword"
              />
              <LoginPage.FormFooter>
                <Checkbox
                  name="showPassword"
                  checked={values.showPassword}
                  value={values.showPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Show password"
                />
                <Link to="/forgotpassword">Forgot password?</Link>
              </LoginPage.FormFooter>

              <LoginPage.SubmitButtonWrapper>
                <Button
                  isLoading={false}
                  title="Login"
                  type="submit"
                  buttonType="block"
                  buttonStyle="primary"
                  disabled={shouldDisableSubmitButton()}
                />
              </LoginPage.SubmitButtonWrapper>
            </LoginPage.Wrapper>
          );
        }}
      </Form>
    </>
  );
};

LoginPage.Wrapper = styled.div``;
LoginPage.SubmitButtonWrapper = styled.div`
  margin-top: ${spacing.sm};
`;
LoginPage.FormFooter = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: ${spacing.sm};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  > a {
    text-decoration: none;
    color: ${colors.WHITE};
    text-align: start;

    ${mq[1]} {
      text-align: end;
    }
  }
`;

export default withAuthenticationContainer(LoginPage);
