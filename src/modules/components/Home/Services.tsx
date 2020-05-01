import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import { mq } from 'styles/_global.style';
import About from 'modules/components/Home/About';
import PhotograpySvg from 'assets/svg/photography';
import CinematograpySvg from 'assets/svg/cinematography';
import ContentCreationSvg from 'assets/svg/contentCreation';

const Services = (): React.ReactElement => {
  return (
    <Services.Wrapper id="services">
      <Services.Text>
        <span>Services</span>
      </Services.Text>
      <Services.Header>
        <h2>Our Services</h2>
      </Services.Header>
      <Services.Content className="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
        <Services.Card>
          <span>
            <PhotograpySvg fill="#fff" height="100" width="100" />
          </span>
          <h3>Photography</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero sapiente atque sunt quibusdam nihil
            accusantium iusto veritatis qui iure quas impedit quia rerum voluptatem quos, repudiandae explicabo amet
            aperiam.
          </p>
        </Services.Card>
        <Services.Card>
          <span>
            <CinematograpySvg fill="#fff" height="100" width="100" />
          </span>
          <h3>Cinematograpy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero sapiente atque sunt quibusdam nihil
            accusantium iusto veritatis qui iure quas impedit quia rerum voluptatem quos, repudiandae explicabo amet
            aperiam.
          </p>
        </Services.Card>
        <Services.Card>
          <span>
            <ContentCreationSvg fill="#fff" height="100" width="100" />
          </span>
          <h3>Content Creation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero sapiente atque sunt quibusdam nihil
            accusantium iusto veritatis qui iure quas impedit quia rerum voluptatem quos, repudiandae explicabo amet
            aperiam.
          </p>
        </Services.Card>
      </Services.Content>
    </Services.Wrapper>
  );
};

Services.Wrapper = styled.section`
  overflow: hidden;
  border-top: 1px solid ${colors.DARKER_GRAY};
  min-height: 500px;
  width: 100%;
  padding: 3em 1em;
  text-align: center;
  color: ${colors.WHITE};
  overflow-x: hidden;
  position: relative;

  ${mq[1]} {
    padding: 5em;
  }
`;

Services.Text = About.AboutText.withComponent('div');
Services.Header = About.Header.withComponent('div');

Services.Content = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-column-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  position: inherit;
`;

Services.Card = styled.div`
  max-width: 400px;
  min-height: 300px;
  margin: 0 auto;
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(46, 46, 46, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);
`;

export default Services;
