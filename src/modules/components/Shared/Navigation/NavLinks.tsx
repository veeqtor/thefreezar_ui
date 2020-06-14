import * as React from 'react';
import styled from '@emotion/styled';
import { Link as AnchorLink } from 'react-scroll';

import { Link } from 'react-router-dom';
import { mq } from 'styles/_global.style';
import { colors } from 'styles/_variables.style';

interface INavLinks {
  to: string;
  title: string;
  anchor: boolean;
}
interface INavListItemProps {
  link: string;
  location: string;
}

interface INavLinksProps {
  location: string;
}

const NavLinks = ({ location }: INavLinksProps): React.ReactElement => {
  const navLinks: INavLinks[] = [
    {
      to: '/',
      title: 'Home',
      anchor: false,
    },
    {
      to: 'portfolio',
      title: 'Portfolio',
      anchor: true,
    },
    {
      to: 'contact',
      title: 'Contact',
      anchor: true,
    },
    {
      to: 'about',
      title: 'About',
      anchor: true,
    },
    {
      to: '/session',
      title: 'Book Now',
      anchor: false,
    },
  ];
  const linksItems = navLinks.map((link, i) => {
    let links;
    if (!link.anchor) {
      links = <Link to={link.to}>{link.title}</Link>;
    } else {
      links = (
        <AnchorLink to={link.to} hashSpy={true} spy={true} smooth={true} offset={-70} duration={500}>
          {link.title}
        </AnchorLink>
      );
    }
    return (
      <NavLinks.listItem key={i} link={link.to} location={location}>
        {links}
      </NavLinks.listItem>
    );
  });

  return (
    <NavLinks.Wrapper>
      <ul>{linksItems}</ul>
    </NavLinks.Wrapper>
  );
};

NavLinks.listItem = styled.li<INavListItemProps>`
  padding: 1.5em 1em;
  border-bottom: 1px inset ${colors.BLACK};

  ${mq[2]} {
    padding-right: 1em;
    border-bottom: unset;
  }

  & a {
    display: block;
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
    padding-bottom: 0.4em;
    cursor: pointer;
    
    // border-bottom: ${({ link, location }): string => (link === location ? `2px solid ${colors.PRIMARY}` : 'unset')};

    &:hover {
      border-bottom: 2px solid ${colors.PRIMARY_HOVER};
    }
  }
`;

NavLinks.Wrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  ${mq[2]} {
    display: unset;
    ul {
      align-items: center;
      flex-direction: row;
    }
  }
`;

export default NavLinks;
