import * as React from 'react';
import styled from '@emotion/styled';
import Icon, { Size } from 'modules/components/Shared/ui/Icon';
import { colors } from 'styles/_variables.style';
import { mq } from 'styles/_global.style';

interface ISocialLinks {
  icon: string;
  size: Size;
  color: string;
  link: string;
}

const Social = (): React.ReactElement => {
  const socialLinks: ISocialLinks[] = [
    {
      icon: 'logo-instagram',
      size: 'md',
      color: colors.WHITE,
      link: 'https://instagram.com',
    },
    {
      icon: 'logo-facebook',
      size: 'md',
      color: colors.WHITE,
      link: 'https://facebook.com',
    },
    {
      icon: 'logo-twitter',
      size: 'md',
      color: colors.WHITE,
      link: 'https://twitter.com',
    },
    {
      icon: 'logo-googleplus',
      size: 'md',
      color: colors.WHITE,
      link: 'https://google.com',
    },
  ];
  return (
    <Social.Wrapper>
      <ul>
        {socialLinks.map((social, i) => (
          <li key={i}>
            <a href={social.link}>
              <Icon iconType={social.icon} iconSize={social.size} color={social.color} />
            </a>
          </li>
        ))}
      </ul>
    </Social.Wrapper>
  );
};

Social.Wrapper = styled.div`
  position: absolute;
  left: 1em;
  bottom: 1em;
  ${mq[2]} {
    top: 35%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    ${mq[2]} {
      display: block;
    }
  }
  li {
    margin-right: 1em;
    ${mq[2]} {
      margin-bottom: 1em;
    }
  }
`;

export default Social;
