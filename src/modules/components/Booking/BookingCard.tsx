/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { useDispatch } from 'react-redux';

import { colors } from 'styles/_variables.style';
import Form from 'modules/components/Form';
import Button from 'modules/components/Shared/ui/Button';
import Select from 'modules/components/Shared/ui/Select';
import { mq } from 'styles/_global.style';
import { goToNextPage } from 'store/actions/navigation';

interface ISelectOptions {
  id: number;
  name: string;
  value: string | number;
}

export interface IBookingCardProps {
  id: number;
  name: string;
  shortDescription: string;
  imageUrls: string[];
  packages: ISelectOptions[];
  imageFadeMultiplier?: number;
}

interface IBookingCardImgWrapper {
  imageUrl: string;
}

const BookingCard = (props: IBookingCardProps): React.ReactElement<IBookingCardProps> => {
  const { id, packages, name, shortDescription, imageUrls, imageFadeMultiplier } = props;
  const [price, setPrice] = React.useState<string | number>('Select a Package');
  const [selectedBooking, setSelectedBooking] = React.useState({});
  const dispatch = useDispatch();

  const initialValues = {
    package: '',
  };

  const onSubmit = (): void => {
    console.log(selectedBooking, id, name);
  };

  const validate = (value: string): boolean => {
    return !!value;
  };

  const gallerySwiperParams = {
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000 * (imageFadeMultiplier || 1),
      disableOnInteraction: false,
      reverseDirection: true,
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  const goToDetails = (): void => {
    dispatch(goToNextPage({ nextPageRoute: '/booking/detail' }));
  };

  return (
    <BookingCard.Wrapper>
      <BookingCard.Content>
        <div>
          <Swiper {...gallerySwiperParams}>
            {imageUrls.map((url, i) => (
              <BookingCard.Img key={i} imageUrl={url} />
            ))}
          </Swiper>
        </div>
      </BookingCard.Content>
      <BookingCard.Content>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        <div>
          <span>{price}</span>
        </div>
        <div style={{ margin: '1em 0' }}>
          <Form handelOnSubmit={onSubmit} defaultValues={initialValues} validate={validate}>
            {({ values, handleChange }): React.ReactNode => {
              const getPrice = (values: Record<string, string | number>): void => {
                const [selectedObj] = packages.filter(p => p.value === +values.package);
                selectedObj && setPrice(selectedObj.value);
                selectedObj && setSelectedBooking(selectedObj);
              };
              React.useEffect(() => {
                getPrice(values);
              }, [values.package]);
              return (
                <div>
                  <Select
                    name="package"
                    options={packages}
                    handleChange={handleChange}
                    value={values.package}
                    placeholder="Select a package"
                  />
                  <Button
                    title="Learn More"
                    type="button"
                    buttonType="block"
                    buttonStyle="primary"
                    handleOnclick={goToDetails}
                  />
                </div>
              );
            }}
          </Form>
        </div>
      </BookingCard.Content>
    </BookingCard.Wrapper>
  );
};

BookingCard.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.DARKER_GRAY};
  box-shadow: 0 1px 3px 0 rgba(46, 46, 46, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  padding: 1em;
  margin-bottom: 4em;
  ${mq[1]} {
    border-radius: unset;
    margin-bottom: unset;
    box-shadow: unset;
    flex-direction: row;
  }
`;

BookingCard.Content = styled.div`
  width: 100%;
  padding: 1em;

  ${mq[1]} {
    width: 60%;
  }

  &:last-of-type {
    width: 100%;

    ${mq[1]} {
      width: 40%;
    }
  }

  h2 {
    margin-top: 0;
    border-bottom: 1px solid ${colors.DARKER_GRAY};
    padding-bottom: 0.5em;
    font-family: Futura;
    text-transform: uppercase;
    overflow-wrap: break-word;
  }
`;

BookingCard.Img = styled.div<IBookingCardImgWrapper>`
  height: 25em;
  background-image: url(${({ imageUrl }): string => imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

export default BookingCard;
