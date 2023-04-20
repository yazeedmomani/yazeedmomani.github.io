import styles from "./portoflio.module.scss";
import SectionHeader from "../../../components/section-header";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import ImageCard from "../../../components/image-card";
import image from "../../../images/josor-steels.png";

const SLIDES = [
  {
    src: require("../../../images/josor-steels.png"),
    alt: "Blueprint of a hunger watermarked by the logo of Josor Steels company",
  },
];

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
        {SLIDES.map((current, index) => (
          <SwiperSlide key={index}>
            <ImageCard
              src={current.src}
              alt={current.alt}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}
