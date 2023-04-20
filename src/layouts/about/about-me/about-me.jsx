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
      <p>
        I am a skilled and dedicated React Front-End Web Developer with a
        passion for creating engaging, user-friendly, and high-performance web
        solutions. I empower businesses and individuals to elevate their digital
        presence with expertly crafted React front-end web interfaces.
      </p>
      <p>
        My journey into web development began with an innate curiosity and a
        drive to understand the digital world. I quickly mastered HTML, CSS, and
        JavaScript, discovering the power of the React library along the way.
        This dedication led me to work on a groundbreaking project, showcasing
        my ability to deliver top-notch results and bring clients' visions to
        life.
      </p>
      <p>
        Committed to staying up-to-date with the latest industry trends and best
        practices, I ensure my clients receive the most innovative and efficient
        solutions possible. My strong work ethic and unwavering dedication to
        excellence make me the go-to expert for businesses and individuals
        seeking to elevate their digital presence.
      </p>
      <p>
        Whether it's a small-scale project or a large, complex application, my
        technical expertise and commitment to delivering outstanding results
        make me the ideal partner for all your front-end development needs,
        specializing in high-performance React web solutions.
      </p>
    </section>
  );
}
