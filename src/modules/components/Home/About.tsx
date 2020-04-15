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
    <About.Content>
      <p>
        <span>The Freezar</span> is multi-media company that specializes in photography, cinematography, make-up,hair,
        content-creation . We understand that personal client relationship is the key to repeat business therefore we
        have made it a standard to create and maintain healthy customer relationshipsby rendering quality, high standard
        of service to suit the needs of our esteem clients.
      </p>
    </About.Content>
    <About.Footer>
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
  border-top: 1px solid ${colors.GRAY};
  min-height: 500px;
  width: 100%;
  background: ${colors.BLACK};
  padding: 1em;
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
  top: 0;
  span {
    font-size: 7em;
    font-family: Futura;
    text-transform: uppercase;
  }
  ${mq[1]} {
    left: 25%;
    top: 5%;
  }
`;

About.Header = styled.div`
  color: ${colors.GRAY};
  position: relative;
  margin-bottom: 3em;
`;

About.Content = styled.div`
  position: relative;
  ${mq[2]} {
    padding: 0 10em;
  }
  ${mq[3]} {
    padding: 0 20em;
  }
`;

About.Footer = styled.div`
  ${mq[1]} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  ${mq[2]} {
    padding: 0 10em;
  }
  ${mq[3]} {
    padding: 0 20em;
  }
`;

export default About;
