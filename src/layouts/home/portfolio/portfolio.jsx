import styles from "./portoflio.module.scss";
import SectionHeader from "../../../components/section-header";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import ImageCard from "../../../components/image-card";
import image from "../../../images/josor-steels.png";

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
          <ImageCard
            src={image}
            alt="Blueprint of a hunger watermarked by the logo of Josor Steels company"
          />
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
    </section>
  );
}
