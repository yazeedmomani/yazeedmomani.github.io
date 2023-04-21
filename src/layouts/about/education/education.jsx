import styles from "./education.module.scss";
import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";

export default function Education() {
  const statements = [
    "Bachelors of Science | Software Engineering",
    "2023 - 2026",
  ];

  return (
    <section className={styles.section}>
      <SectionHeader
        title="My educational journey"
        className={styles.sectionHeader}
        name="Education"
      />
      <MultiInfoHeader
        className={styles.multiInfoHeader}
        title="Princess Sumaya University for Technology"
        statements={statements}
      />
    </section>
  );
}
