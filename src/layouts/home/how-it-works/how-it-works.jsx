import styles from "./how-it-works.module.scss";
import SectionHeader from "../../../components/section-header";

const STEPS = [
  {
    NUMBER: "01",
    TITLE: "Define your vision and desired features for the website",
    PARAGRAPH:
      "The application stage is all about identifying your website's purpose and desired functionality. By discussing your vision and goals, you provide a clear roadmap for the design and development process, ensuring a custom website that meets your specific needs.",
  },
  {
    NUMBER: "02",
    TITLE: "Define your vision and desired features for the website",
    PARAGRAPH:
      "The application stage is all about identifying your website's purpose and desired functionality. By discussing your vision and goals, you provide a clear roadmap for the design and development process, ensuring a custom website that meets your specific needs.",
  },
  {
    NUMBER: "03",
    TITLE: "Define your vision and desired features for the website",
    PARAGRAPH:
      "The application stage is all about identifying your website's purpose and desired functionality. By discussing your vision and goals, you provide a clear roadmap for the design and development process, ensuring a custom website that meets your specific needs.",
  },
  {
    NUMBER: "04",
    TITLE: "Define your vision and desired features for the website",
    PARAGRAPH:
      "The application stage is all about identifying your website's purpose and desired functionality. By discussing your vision and goals, you provide a clear roadmap for the design and development process, ensuring a custom website that meets your specific needs.",
  },
];

function Step({ number, title, paragraph, withMargin }) {
  return (
    <>
      <span className={`${styles.step} ${withMargin && styles.withMargin}`}>
        {number}
      </span>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </>
  );
}

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <SectionHeader
        sectionName="How It Works"
        className={styles.sectionHeader}>
        craft your website in 4 simple steps
      </SectionHeader>
      {STEPS.map(({ NUMBER, TITLE, PARAGRAPH }, index) => (
        <Step
          key={NUMBER}
          number={NUMBER}
          title={TITLE}
          withMargin={index !== STEPS.length - 1}
          paragraph={PARAGRAPH}
        />
      ))}
    </section>
  );
}
