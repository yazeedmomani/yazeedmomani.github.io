import Breadcrumb from "../../components/breadcrumb";
import styles from "./about.module.scss";
import AboutMe from "../../layouts/about/about-me";
import Experience from "../../layouts/about/experience";
import Education from "../../layouts/about/education";
import Certifications from "../../layouts/about/certifications";
import Skills from "../../layouts/about/skills";
import Languages from "../../layouts/about/langauges";
import CTA from "../../layouts/general/cta/";

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
      <Certifications />
      <Skills />
      <Languages />
      <CTA className={styles.cta} />
    </main>
  );
}
