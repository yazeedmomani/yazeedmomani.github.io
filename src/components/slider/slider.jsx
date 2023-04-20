import React from "react";
import { Swiper, useSwiper } from "swiper/react";
import "swiper/css";
import Arrow from "../arrow";
import styles from "./slider.module.scss";

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
  return (
    <Swiper {...swiperConfig}>
      {children}
      <div className={styles.arrowContainer}>
        <PreviousButton />
        <NextButton />
      </div>
    </Swiper>
  );
}
