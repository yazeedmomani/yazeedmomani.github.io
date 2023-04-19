import styles from "./footer.module.scss";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";

export default function Footer() {
  const twitterClass = `bx bxl-twitter ${styles.icon}`;
  const linkedInClass = `bx bxl-linkedin ${styles.icon}`;
  const githubClass = `bx bxl-github ${styles.icon}`;
  const upworkClass = `bx bxl-upwork ${styles.icon}`;

  return (
    <footer className={styles.footer}>
      <Link to="/">
        <Logo
          dark
          className={styles.logo}
        />
      </Link>
      <div className={styles.iconContainer}>
        <a
          href="https://twitter.com/yaz_momani"
          className={styles.link}>
          <i class={twitterClass}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yazeedalmomani"
          className={styles.link}>
          <i class={linkedInClass}></i>
        </a>
        <a
          href="https://github.com/yazeedmomani"
          className={styles.link}>
          <i class={githubClass}></i>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01428ceffca847ca7a"
          className={styles.link}>
          <i class={upworkClass}></i>
        </a>
      </div>
      <a
        href="tel:+962798697131"
        className={styles.contact}>
        +962798697131
      </a>
      <a
        href="mailto:yazeed.02.momani@outlook.com"
        className={styles.contact}>
        yazeed.02.momani@outlook.com
      </a>
      <h2 className={styles.pagesTitle}>Pages</h2>
      <ul className={styles.pagesUl}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <p className={styles.copyright}>&copy; 2023 Yazeed al-Momani</p>
    </footer>
  );
}
