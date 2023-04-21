import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";
import styles from "./languages.module.scss";

const LANGUAGES = [
  { languages: "Arabic", level: "Native proficiency" },
  { languages: "English", level: "Bilingual Proficiency" },
  { languages: "German", level: "Limited working proficiency" },
];

export default function Languages() {
  return (
    <section className={styles.section}>
      <SectionHeader
        className={styles.sectionHeader}
        name="Languages"
        title="My linguistic skills"
      />
      <ul>
        {LANGUAGES.map((current, index) => (
          <li key={current}>
            <MultiInfoHeader
              className={styles.multiInfoHeader}
              title={`${index + 1}. ${current.languages}`}
              statements={[current.level]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
