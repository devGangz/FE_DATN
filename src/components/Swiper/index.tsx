import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

const images = [
  { key: "slider1", url: "../images/slider1.png" },
  { key: "slider2", url: "../images/slider2.jpg" },
  { key: "slider3", url: "../images/slider3.jpg" },
  { key: "slider4", url: "../images/slider4.jpg" },
  { key: "slider5", url: "../images/slider5.jpg" },
  { key: "slider6", url: "../images/slider6.jpg" },
];

export const SwiperSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image.key}>
          <img alt={"slider"} src={image.url} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
