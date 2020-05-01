/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';

interface IBookingDetailImageImgWrapper {
  imageUrl: string;
}
interface IBookingDetailImageProps {
  imageUrls: string[];
}

const BookingDetailImage = (props: IBookingDetailImageProps): React.ReactElement => {
  const { imageUrls } = props;
  const [gallerySwiper, getGallerySwiper] = React.useState<Record<string, any>>({});
  const [thumbnailSwiper, getThumbnailSwiper] = React.useState<Record<string, any>>({});
  React.useEffect(() => {
    if (gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  return (
    <div>
      <BookingDetailImage.ImgWrapper>
        <Swiper {...gallerySwiperParams}>
          {imageUrls.map((url, i) => (
            <BookingDetailImage.Img key={i} imageUrl={url} />
          ))}
        </Swiper>
      </BookingDetailImage.ImgWrapper>
      <BookingDetailImage.ThumbnailWrapper>
        <Swiper {...thumbnailSwiperParams}>
          {imageUrls.map((url, i) => (
            <BookingDetailImage.Thumbnail key={i} imageUrl={url} />
          ))}
        </Swiper>
      </BookingDetailImage.ThumbnailWrapper>
    </div>
  );
};

BookingDetailImage.ImgWrapper = styled.div``;

BookingDetailImage.ThumbnailWrapper = styled.div`
  margin-top: 1em;
`;

BookingDetailImage.Img = styled.div<IBookingDetailImageImgWrapper>`
  height: 30vh;
  background-image: url(${({ imageUrl }): string => imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

BookingDetailImage.Thumbnail = styled.div<IBookingDetailImageImgWrapper>`
  height: 3em;
  background-image: url(${({ imageUrl }): string => imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

export default BookingDetailImage;
