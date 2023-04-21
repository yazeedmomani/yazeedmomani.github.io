import React, { useState } from "react";
import { Swiper, useSwiper } from "swiper/react";
import "swiper/css";
import Arrow from "../arrow";
import styles from "./slider.module.scss";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import useWindowDimensions from "../../hooks/use-window-dimensions";

function NextButton() {
  const swiper = useSwiper();

  return (
    <>
      <Arrow
        direction="right"
        onClick={() => swiper.slideNext()}
        className={styles.nextButton}
      />
    </>
  );
}

function PreviousButton() {
  const swiper = useSwiper();

  return (
    <>
      <Arrow
        direction="left"
        onClick={() => swiper.slidePrev()}
        className={styles.nextButton}
      />
    </>
  );
}

export default function Slider({ children }) {
  const { width, height } = useWindowDimensions();
  let slidesPerView = 1;

  if (width >= 1200) {
    slidesPerView = 3;
  } else if (width >= 900) {
    slidesPerView = 2;
  }

  const swiperConfig = {
    slidesPerView: slidesPerView,
    spaceBetween: 10,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper
      {...swiperConfig}
      modules={[Pagination]}>
      {children}
      <div className={styles.arrowContainer}>
        <PreviousButton />
        <NextButton />
      </div>
    </Swiper>
  );
}
