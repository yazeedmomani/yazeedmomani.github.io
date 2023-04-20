import styles from "./cta.module.scss";
import Button from "../../../components/button";

export default function CTA() {
  return (
    <section className={styles.section}>
      <h2>
        What are you wating for? Let's create your stunning, responsive website
        today!
      </h2>
      <Button
        href="https://www.upwork.com/freelancers/~01428ceffca847ca7a"
        primary>
        Hire me
      </Button>
    </section>
  );
}
