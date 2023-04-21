import styles from "./portoflio.module.scss";
import SectionHeader from "../../../components/section-header";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import ImageCard from "../../../components/image-card";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    src: require("../../../images/josor-steels.png"),
    alt: "Blueprint of a hunger watermarked by the logo of Josor Steels company",
    to: "/projects/wrk_web_josor-steels",
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
            <Link to={current.to}>
              <ImageCard
                src={current.src}
                alt={current.alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}
