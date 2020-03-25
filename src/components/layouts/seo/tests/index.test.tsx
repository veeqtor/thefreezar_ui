import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import SEO from '../index';

describe('SEO Component test', () => {
  afterEach(cleanup);

  it('Should render SEO component', () => {
    const { baseElement } = render(<SEO title="Test Page" />);
    expect(baseElement).toBeInTheDOM();
  });
});
