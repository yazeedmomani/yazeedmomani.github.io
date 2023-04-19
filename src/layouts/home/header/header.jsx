import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Hello, It's Me <span>Yazeed</span> And I am a{" "}
        <span>Front-End Developer</span>
      </h1>
      <span>Designing Tomorrow's Web, One Pixel at a Time</span>
    </header>
  );
}
