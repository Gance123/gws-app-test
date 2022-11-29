import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  EffectCoverflow,
  EffectCube,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImageType } from "../../images/SliderImage";

type Props = {
  images: Array<SliderImageType>;
};

export const SwiperSlider = (props: Props) => {
  const { images} = props;
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        EffectCube,
      ]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      loop={true}
      grabCursor={true}
      centeredSlides={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <a href={image.nav}>
            <p>{image.title}</p>
          </a>
          <img src={image.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
