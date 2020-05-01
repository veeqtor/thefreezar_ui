import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import { Link } from 'react-router-dom';

const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();
  return (
    <Footer.Wrapper>
      <div>
        <span>
          &copy; {year} The Freezar Nigeria | <Link to="#/">Terms of services</Link> |{' '}
          <Link to="#/">Privacy policy</Link>
        </span>
      </div>
    </Footer.Wrapper>
  );
};

Footer.Wrapper = styled.section`
  border-top: 1px solid ${colors.DARKER_GRAY};
  min-height: 20px;
  width: 100%;
  padding: 0.85em 1em;
  font-size: small;
  color: ${colors.GRAY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  a {
    text-decoration: none;
    color: ${colors.GRAY};
  }
`;

export default Footer;
