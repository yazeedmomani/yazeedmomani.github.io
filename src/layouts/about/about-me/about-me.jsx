import styles from "./about-me.module.scss";
import SectionHeader from "../../../components/section-header";

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <SectionHeader
        name="About me"
        title="Who is yazeed?"
        className={styles.sectionHeader}
      />
    </section>
  );
}
