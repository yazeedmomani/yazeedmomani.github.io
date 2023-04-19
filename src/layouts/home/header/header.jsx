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
        <Button primary>Hire me</Button>
        <Button>Download resume</Button>
      </div>
    </header>
  );
}
