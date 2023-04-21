import styles from "./experience.module.scss";
import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";

export default function Experience() {
  return (
    <section className={styles.section}>
      <SectionHeader
        name="experience"
        title="My professional journey"
        className={styles.sectionHeader}
      />
      <MultiInfoHeader
        title="Josor Steels"
        statements={[
          "Freelancer | Front-End Web Developer",
          "Feb 2023 - Present",
          "Amman, Jordan - Remote",
        ]}
        className={styles.multiInfoHeader}
      />
    </section>
  );
}
