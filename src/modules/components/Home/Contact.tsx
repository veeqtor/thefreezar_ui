import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import { mq } from 'styles/_global.style';
import ContactForm from 'modules/components/Home/ContactForm';
import Icon from 'modules/components/Shared/ui/Icon';

interface IContactInfo {
  icon: string;
  title: string;
}
const contactInfo: IContactInfo[] = [
  {
    icon: 'call',
    title: '1234567890, 1234567890',
  },
  {
    icon: 'home',
    title: 'No 9 surulere street surulere lagos state',
  },
  {
    icon: 'mail',
    title: 'thefreezarnigeria@gmail.com',
  },
];
const Contact = (): React.ReactElement => {
  return (
    <Contact.Wrapper id="contact">
      <Contact.ContactText>
        <span>Contact Us</span>
      </Contact.ContactText>
      <Contact.Header>
        <h2>Contact</h2>
        <div className="wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
          <h4>Got a question?</h4>
          <p>We’re here to help and answer any question you might have. We look forward to hearing from you</p>
        </div>
      </Contact.Header>
      <Contact.Content className="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
        <Contact.ContentLeft>
          <ContactForm />
        </Contact.ContentLeft>
        <Contact.ContentRight>
          <div>
            <h2>Get In Touch !</h2>
            <ul>
              {contactInfo.map((info, i) => (
                <li key={i}>
                  <span>
                    <Icon iconType={`ios-${info.icon}`} iconSize="md" />
                  </span>
                  {info.title}
                </li>
              ))}
            </ul>
          </div>
        </Contact.ContentRight>
      </Contact.Content>
    </Contact.Wrapper>
  );
};

Contact.Wrapper = styled.section`
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

Contact.ContactText = styled.div`
  position: absolute;
  color: ${colors.DARKER_GRAY};
  top: 5%;
  left: 10%;
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

Contact.Header = styled.div`
  position: relative;
  margin-bottom: 3em;
  max-width: 500px;
  margin: 0 auto;

  h2 {
    color: ${colors.GRAY};
  }
`;

Contact.Content = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  position: inherit;
`;

Contact.ContentLeft = styled.div`
  padding: 1em;
`;

Contact.ContentRight = styled.div`
  padding: 1em;
  text-align: left;
  justify-content: center;
  display: flex;
  align-items: center;

  h2 {
    color: ${colors.GRAY};
    border-bottom: 1px inset ${colors.DARKER_GRAY};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;

    li {
      padding-bottom: 1rem;

      span {
        padding-right: 1rem;
      }
    }
  }
`;

export default Contact;
