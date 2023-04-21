import Breadcrumb from "../../components/breadcrumb";
import styles from "./about.module.scss";
import AboutMe from "../../layouts/about/about-me";
import Experience from "../../layouts/about/experience";
import Education from "../../layouts/about/education";

const BREADCRUMB_ITEMS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
  },
];

export default function About() {
  return (
    <main className={styles.main}>
      <Breadcrumb
        items={BREADCRUMB_ITEMS}
        className={styles.breadcrumb}
      />
      <AboutMe />
      <Experience />
      <Education />
    </main>
  );
}
