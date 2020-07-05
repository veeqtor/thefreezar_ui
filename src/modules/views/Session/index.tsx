import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationRootState } from 'types';
import SEO from 'modules/components/SEO';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import SessionCard, { ISessionCardProps } from 'modules/components/Session/SessionCard';
import { mq } from 'styles/_global.style';
import withPageData from 'modules/HOC/withPageData';
import { sessionPageRetrieve } from 'store/actions/session';
import { selectSessionPageData } from 'store/selectors/sessionSelector';
import { toArray } from 'lodash';

export interface ISessionPage {
  title: string;
  pageData: Record<string, unknown>;
}

const SessionPage = (props: ISessionPage): React.ReactElement => {
  const {
    pageData: { data },
  } = props;
  const sessions: ISessionCardProps[] = toArray(data);
  return (
    <>
      <SEO title={props.title} />
      <SessionPage.Layout>
        <ul>
          {sessions.map((card, i) => (
            <li key={i}>
              <SessionCard {...card} />
            </li>
          ))}
        </ul>
        <SessionPage.Clear></SessionPage.Clear>
      </SessionPage.Layout>
    </>
  );
};

SessionPage.Layout = styled.section`
  padding: 6.25em 2em;
  color: ${colors.WHITE};
  margin: 0 auto;
  max-width: 1440px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 2em;

    li {
      ${mq[1]} {
        width: 72%;
        :nth-of-type(odd) {
          float: left;

          > div {
            flex-direction: row-reverse;
          }
        }
        :nth-of-type(2n) {
          float: right;
          > div {
            flex-direction: row;
          }
        }
      }
    }
  }
`;

SessionPage.Clear = styled.div`
  clear: both;
`;

const mapStateToProps = (state: IApplicationRootState): Pick<ISessionPage, 'pageData'> => ({
  pageData: selectSessionPageData(state),
});

export default connect(mapStateToProps, null)(withPageData(SessionPage, sessionPageRetrieve));
