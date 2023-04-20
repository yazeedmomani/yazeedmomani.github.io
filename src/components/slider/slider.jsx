import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default function Slider({ children }) {
  return <Swiper {...swiperConfig}>{children}</Swiper>;
}

/*
NOTE Below is an example of how swiper children should look like:

        <SwiperSlide>
          <h1>Slide 1</h1>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Slide 2</h1>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Slide 3</h1>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Slide 4</h1>
        </SwiperSlide>

You have to import {SwiperSlide} from "swiper/react" in the parent component
*/
