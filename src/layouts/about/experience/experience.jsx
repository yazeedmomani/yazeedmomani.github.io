import styles from "./experience.module.scss";
import SectionHeader from "../../../components/section-header";

export default function Experience() {
  return (
    <section className={styles.section}>
      <SectionHeader
        name="experience"
        title="My professional journey"
        className={styles.sectionHeader}
      />
    </section>
  );
}
