import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

export interface IBookingReviewCardProp {
  name: string;
  date: string;
  review: string;
}
const BookingReviewCard = (props: IBookingReviewCardProp): React.ReactElement => {
  const { name, date, review } = props;
  return (
    <>
      <BookingReviewCard.Wrapper>
        <BookingReviewCard.Header>
          <span>{name}</span>
          <span>{date}</span>
        </BookingReviewCard.Header>
        <BookingReviewCard.Review>
          <p>{review}</p>
        </BookingReviewCard.Review>
      </BookingReviewCard.Wrapper>
    </>
  );
};
BookingReviewCard.Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid ${colors.DARKER_GRAY};
`;
BookingReviewCard.Header = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.GRAY};
    font-size: small;
  }
`;

BookingReviewCard.Review = styled.div``;

export default BookingReviewCard;
