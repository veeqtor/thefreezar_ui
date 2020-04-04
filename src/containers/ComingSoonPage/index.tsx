/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { HeroWrapper, Overlay, HeroTextWrapper } from './index.styles';
import SEO from '../../components/layouts/SEO';

interface IComingSoonPageProps {
  title: string;
}

const ComingSoonPage = ({ title }: IComingSoonPageProps): React.ReactElement => (
  <HeroWrapper>
    <SEO title={title} />
    <Overlay>
      <HeroTextWrapper>
        <p>Coming soon</p>
        <h1>The Freezar Nigeria</h1>
        <p>
          The freezar is a multi-media company that specializes in photography, cinematography, make-up, hair and
          content creation.
        </p>
        <span></span>
      </HeroTextWrapper>
    </Overlay>
  </HeroWrapper>
);

export default ComingSoonPage;
