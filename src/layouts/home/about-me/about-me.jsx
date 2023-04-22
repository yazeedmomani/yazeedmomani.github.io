import styles from "./about-me.module.scss";
import SectionHeader from "../../../components/section-header";
import Button from "../../../components/button";
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <Fade
        duration={1000}
        distance="80px"
        delay={1200}
        bottom>
        <SectionHeader
          name="About Me"
          title="Who am I?"
          className={styles.sectionHeader}
        />
        <p>
          I am a skilled and dedicated React Front-End Web Developer with a
          passion for creating engaging, user-friendly, and high-performance web
          solutions. I empower businesses and individuals to elevate their
          digital presence with expertly crafted React front-end web interfaces.
        </p>
        <Button
          className={styles.btn}
          to="/about">
          Learn more
        </Button>
      </Fade>
    </section>
  );
}
