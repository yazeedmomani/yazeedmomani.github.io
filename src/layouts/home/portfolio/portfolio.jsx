import styles from "./portoflio.module.scss";
import SectionHeader from "../../../components/section-header";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import Arrow from "../../../components/arrow";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <SectionHeader
        name="Portfolio"
        className={styles.sectionHeader}
        title="My latest projects"
        dark
      />
      <Slider>
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
      </Slider>
      <div className={styles.arrowContainer}>
        <Arrow direction="left" />
        <Arrow direction="right" />
      </div>
    </section>
  );
}
