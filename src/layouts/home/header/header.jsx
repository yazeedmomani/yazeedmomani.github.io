import styles from "./header.module.scss";
import Button from "../../../components/button";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Hello, It's Me <span>Yazeed</span> And I am a{" "}
        <span>Front-End Developer</span>
      </h1>
      <span>Designing Tomorrow's Web, One Pixel at a Time</span>
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
    </header>
  );
}
