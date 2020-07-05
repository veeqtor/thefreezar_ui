import * as React from 'react';
import styled from '@emotion/styled';
import { mq } from 'styles/_global.style';
import { colors } from 'styles/_variables.style';
import UploadImage from 'modules/components/Dashboard/UploadImage';
import UploadImageForm from 'modules/components/Dashboard/UploadImageForm';
import SEO from 'modules/components/SEO';

export interface IOverviewProp {
  title: string;
}

const Overview = (props: IOverviewProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Overview.Wrapper>
        <Overview.Left>
          <h1>Left {title}</h1>
        </Overview.Left>
        <Overview.Right>
          <UploadImageForm />
          <UploadImage />
        </Overview.Right>
      </Overview.Wrapper>
    </>
  );
};

Overview.Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 1em;
    min-height: 50vh;
    padding: 1em;
  }

  h4 {
    color: ${colors.DARKER_GRAY};
    font-size: 1.2em;
    font-family: Futura;
    text-transform: uppercase;
  }

  ${mq[1]} {
    flex-direction: row;
  }
`;

Overview.Left = styled.div`
  min-width: 70%;
`;

Overview.Right = styled.div`
  min-width: 30%;

  ${mq[1]} {
    border-left: 1px solid ${colors.DARKER_GRAY};
  }
`;

export default Overview;
