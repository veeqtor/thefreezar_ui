import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

export declare type type = 'primary' | 'secondary';

const ErrorComponent = (): React.ReactElement => (
  <ErrorComponent.Wrapper>
    <ErrorComponent.Card>
      <p>
        We Could not find what you re looking for, <br />
        Please Reload the page, if it persists contact support. Thanks.
      </p>
    </ErrorComponent.Card>
  </ErrorComponent.Wrapper>
);

ErrorComponent.Wrapper = styled.div`
  background: ${colors.BLACK};
  height: 100vh;
  z-index: 1000;
  position: relative;
`;

ErrorComponent.Card = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default ErrorComponent;
