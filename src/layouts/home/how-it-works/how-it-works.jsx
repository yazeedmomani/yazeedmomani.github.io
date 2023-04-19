import styles from "./how-it-works.module.scss";
import SectionHeader from "../../../components/section-header";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <SectionHeader
        sectionName="How It Works"
        className={styles.sectionHeader}>
        craft your website in 4 simple steps
      </SectionHeader>
    </section>
  );
}
