import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import motto from 'assets/img/concept.png';
import Button from 'modules/components/Button';
import { mq } from 'styles/_global.style';

const About = (): React.ReactElement => (
  <About.Wrapper id="about">
    <About.AboutText>
      <span>About</span>
    </About.AboutText>
    <About.Header>
      <h2>About</h2>
    </About.Header>
    <About.Content className="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
      <p>
        <span>The Freezar</span> is multi-media company that specializes in photography, cinematography, make-up,hair,
        content-creation . We understand that personal client relationship is the key to repeat business therefore we
        have made it a standard to create and maintain healthy customer relationshipsby rendering quality, high standard
        of service to suit the needs of our esteem clients.
      </p>
    </About.Content>
    <About.Footer className="wow fadeIn" data-wow-delay="2s" data-wow-duration="2s">
      <div>
        <img src={motto} alt="motto" />
      </div>
      <div>
        <Button title="More..." buttonStyle="primary" buttonType="block" />
      </div>
    </About.Footer>
  </About.Wrapper>
);

About.Wrapper = styled.section`
  border-top: 1px solid ${colors.DARKER_GRAY};
  min-height: 500px;
  width: 100%;
  padding: 3em 1em;
  text-align: center;
  color: ${colors.WHITE};
  overflow-x: hidden;
  position: relative;
  img {
    width: auto;
    height: 10em;
  }

  ${mq[1]} {
    padding: 5em;
  }
`;

About.AboutText = styled.div`
  position: absolute;
  color: ${colors.DARKER_GRAY};
  top: 3%;
  left: 25%;
  span {
    font-size: 3em;
    font-family: Futura;
    text-transform: uppercase;

    ${mq[1]} {
      font-size: 7em;
    }
  }
  ${mq[1]} {
    left: 25%;
    top: 5%;
  }
  ${mq[2]} {
    left: 15%;
  }
`;

About.Header = styled.div`
  color: ${colors.GRAY};
  position: relative;
  margin-bottom: 3em;
`;

About.Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 600px;
`;

About.Footer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  ${mq[1]} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export default About;
