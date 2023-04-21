import styles from "./experience.module.scss";
import SectionHeader from "../../../components/section-header";
import MultiInfoHeader from "../../../components/multi-info-header";

export default function Experience() {
  return (
    <section className={styles.section}>
      <SectionHeader
        name="experience"
        title="My professional journey"
        className={styles.sectionHeader}
      />
      <MultiInfoHeader
        title="Josor Steels"
        statements={[
          "Freelancer | Front-End Web Developer",
          "Feb 2023 - Present",
          "Amman, Jordan - Remote",
        ]}
        className={styles.multiInfoHeader}
      />
      <p>
        The company "Josor Steels" needed a new website to replace their old
        one. They also needed someone to redraw their logo so that it is
        scalable. I was tasked with designing the website, redrawing its logo,
        and developing it.
      </p>
      <p>
        I redrew the logo using Adobe Illustrator with a light background, a
        dark background, and a transparent background and exported it in
        different formats including SVG, PNG, and ICO. Then, I proceeded by
        designing the website using Adobe XD. After that, I developed the
        website using ReactJS, taking the mobile-first approach.
      </p>
      <p>
        The website hosted on{" "}
        <a href="https://yazeedmomani.github.io/josor-steels">
          https://yazeedmomani.github.io/josor-steels
        </a>{" "}
        is the result of my work. All that is left is to add the contents and
        deploy it.
      </p>
    </section>
  );
}
