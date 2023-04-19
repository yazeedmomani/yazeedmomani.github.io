import styles from "./portoflio.module.scss";
import SectionHeader from "../../../components/section-header";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <SectionHeader
        sectionName="Portfolio"
        className={styles.sectionHeader}
        sectionTitle="My latest projects"
        dark
      />
    </section>
  );
}
