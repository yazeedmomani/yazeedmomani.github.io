import styles from "./cta.module.scss";
import Button from "../../../components/button";
import Fade from "react-reveal/Fade";

export default function CTA({ className }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <Fade
        duration={1000}
        distance="80px"
        delay={200}
        bottom>
        <h2>
          What are you wating for? Let's create your stunning, responsive
          website today!
        </h2>
        <div>
          <Button
            href="https://www.upwork.com/freelancers/~01428ceffca847ca7a"
            primary>
            Hire me
          </Button>
        </div>
      </Fade>
    </section>
  );
}
