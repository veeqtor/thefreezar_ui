import * as React from 'react';
import SEO from 'modules/components/SEO';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import BookingCard, { IBookingCardProps } from 'modules/components/Booking/BookingCard';
import { mq } from 'styles/_global.style';

export interface IBookingPage {
  title: string;
}

const BookingPage = (props: IBookingPage): React.ReactElement => {
  const bookingCards: IBookingCardProps[] = [
    {
      id: 1,
      name: 'HeadShots/ Portraits',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti! quas sunt voluptates iusto corrupti!',
      imageUrls: [
        'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
        'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
        'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
      ],
      packages: [
        {
          id: 1,
          name: 'Standard',
          value: 24000,
        },
        {
          id: 2,
          name: 'Premuim',
          value: 35000,
        },
        {
          id: 3,
          name: 'Platinum',
          value: 50000,
        },
      ],
    },
    {
      id: 2,
      name: "Couple's studio session",
      imageFadeMultiplier: 1.4,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti! quas sunt voluptates iusto corrupti!',
      imageUrls: [
        'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
        'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
        'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
      ],
      packages: [
        {
          id: 1,
          name: 'Standard',
          value: 24000,
        },
        {
          id: 2,
          name: 'Premuim',
          value: 35000,
        },
        {
          id: 3,
          name: 'Platinum',
          value: 50000,
        },
      ],
    },
    {
      id: 3,
      name: 'studio session',
      imageFadeMultiplier: 1.2,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti! quas sunt voluptates iusto corrupti!',
      imageUrls: [
        'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
        'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
        'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
      ],
      packages: [
        {
          id: 1,
          name: 'Standard',
          value: 24000,
        },
        {
          id: 2,
          name: 'Premuim',
          value: 35000,
        },
        {
          id: 3,
          name: 'Platinum',
          value: 50000,
        },
      ],
    },
    {
      id: 4,
      name: 'free session',
      imageFadeMultiplier: 1.7,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam dolore illum iure quo! Maximesaepe aut nobis magni, eos accusantium, odit placeat quia illo quas sunt voluptates iusto corrupti! quas sunt voluptates iusto corrupti!',
      imageUrls: [
        'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
        'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
        'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
      ],
      packages: [
        {
          id: 1,
          name: 'Standard',
          value: 24000,
        },
        {
          id: 2,
          name: 'Premuim',
          value: 35000,
        },
        {
          id: 3,
          name: 'Platinum',
          value: 50000,
        },
      ],
    },
  ];

  return (
    <>
      <SEO title={props.title} />
      <BookingPage.Layout>
        <ul>
          {bookingCards.map((card, i) => (
            <li key={i}>
              <BookingCard {...card} />
            </li>
          ))}
        </ul>
        <BookingPage.Clear></BookingPage.Clear>
      </BookingPage.Layout>
    </>
  );
};

BookingPage.Layout = styled.section`
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

BookingPage.Clear = styled.div`
  clear: both;
`;

export default BookingPage;
