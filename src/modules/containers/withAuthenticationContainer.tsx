/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';

const withAuthenticationContainer = (WrappedComponent: any) => (props: any): React.ReactElement => {
  const onSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };
  const feedbackInfo = '';

  const composeProps = (): Record<string, unknown> => {
    return {
      onSubmit,
      feedbackInfo,
    };
  };
  return <WrappedComponent {...composeProps()} {...props} />;
};

export default withAuthenticationContainer;
