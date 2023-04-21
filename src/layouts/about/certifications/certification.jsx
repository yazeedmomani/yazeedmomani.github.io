import styles from "./certification.module.scss";
import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";

export default function Certifications() {
  const statements = ["Coursera", "Issued Feb 2023"];

  return (
    <section className={styles.section}>
      <SectionHeader
        title="My qualifications and
credentials"
        name="Education"
        className={styles.sectionHeader}
      />
      <MultiInfoHeader
        title="Meta Front-End Developer"
        statements={statements}
        className={styles.multiInfoHeader}
      />
    </section>
  );
}
