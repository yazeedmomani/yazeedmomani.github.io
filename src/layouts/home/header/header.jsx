import styles from "./header.module.scss";
import Button from "../../../components/button";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Fade
          duration={1000}
          distance="80px"
          delay={1400}
          left>
          <span>Hello, It's Me </span>
        </Fade>
        <Fade
          duration={1000}
          distance="80px"
          delay={1400}
          right>
          <span className={`${styles.primary} ${styles.large}`}>Yazeed</span>
        </Fade>{" "}
        <Fade
          duration={1000}
          distance="80px"
          delay={1400}
          left>
          <span>And I am a </span>{" "}
          <span className={styles.primary}>Front-End Developer</span>
        </Fade>
      </h1>
      <Fade
        duration={1000}
        distance="80px"
        delay={1400}
        right>
        <span>Designing Tomorrow's Web, One Pixel at a Time</span>
      </Fade>
      <Fade
        duration={1000}
        distance="80px"
        delay={1400}
        bottom>
        <div>
          <Button
            primary
            href="https://www.upwork.com/freelancers/~01428ceffca847ca7a"
            target="_blank">
            Hire me
          </Button>
          <Button
            download
            href={`${process.env.PUBLIC_URL}/yazeed-al-momani.pdf`}>
            Resume
          </Button>
        </div>
      </Fade>
    </header>
  );
}
