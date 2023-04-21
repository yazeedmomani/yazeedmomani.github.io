import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";
import styles from "./skills.module.scss";

const SKILLS = [
  "React",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe XD",
  "Figma",
  "SCSS",
  "Git",
];

export default function Skills() {
  return (
    <section className={styles.section}>
      <SectionHeader
        className={styles.sectionHeader}
        name="Skills"
        title="My toolbox of abilities"
      />
      <ul>
        {SKILLS.map((skill, index) => (
          <li key={skill}>
            <MultiInfoHeader
              className={styles.multiInfoHeader}
              title={`${index + 1}. ${skill}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
