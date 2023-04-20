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
    TITLE:
      "Collaborate on wireframes and visual layouts to achieve the perfect look",
    PARAGRAPH:
      "In the design phase, you'll collaborate with me on wireframes and visual layouts. This stage focuses on aesthetics, user experience, and navigation, allowing you to fine-tune your website's appearance and ensure visitors' smooth, engaging experience.",
  },
  {
    NUMBER: "03",
    TITLE:
      "Watch as I build the front-end of your site using cutting-edge technologies",
    PARAGRAPH:
      "The development stage is where the front-end magic happens. Working with cutting-edge technologies, I will bring your design to life, creating a responsive, fast-loading, and accessible website that showcases your content in the best possible light.",
  },
  {
    NUMBER: "04",
    TITLE:
      "Receive the polished source code, ready for integration and deployment",
    PARAGRAPH:
      "Finally, in the delivery stage, you'll receive the expertly crafted source code for your website. This polished code is ready for integration with back-end systems and deployment, allowing you to launch your site and share it with the world.",
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
        name="How It Works"
        className={styles.sectionHeader}
        title="craft your website in 4 simple steps"
      />
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
