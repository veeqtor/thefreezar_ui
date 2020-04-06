/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import ComingSoonContainer from 'modules/containers/ComingSoonContainer';

const renderComingSoonPage = (props: any) => {
  return {
    ...render(<ComingSoonContainer {...props} />),
  };
};

describe('Coming soon page Test', () => {
  afterEach(cleanup);

  it('Should render', () => {
    const {
      getByText,
      container: { firstChild },
    } = renderComingSoonPage({ title: 'Coming Soon' });
    expect(getByText('The Freezar Nigeria')).toBeInTheDocument();
    expect(getByText('Coming soon')).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
  });
});
