import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

export interface ISessionReviewCardProp {
  name: string;
  date: string;
  review: string;
}
const SessionReviewCard = (props: ISessionReviewCardProp): React.ReactElement => {
  const { name, date, review } = props;
  return (
    <>
      <SessionReviewCard.Wrapper>
        <SessionReviewCard.Header>
          <span>{name}</span>
          <span>{date}</span>
        </SessionReviewCard.Header>
        <SessionReviewCard.Review>
          <p>{review}</p>
        </SessionReviewCard.Review>
      </SessionReviewCard.Wrapper>
    </>
  );
};
SessionReviewCard.Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid ${colors.DARKER_GRAY};
`;
SessionReviewCard.Header = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.GRAY};
    font-size: small;
  }
`;

SessionReviewCard.Review = styled.div``;

export default SessionReviewCard;
