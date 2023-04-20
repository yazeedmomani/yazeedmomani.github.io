import Breadcrumb from "../../components/breadcrumb";
import styles from "./about.module.scss";

const BREADCRUMB_ITEMS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
  },
];

export default function About() {
  return (
    <main className={styles.main}>
      <Breadcrumb items={BREADCRUMB_ITEMS} />
    </main>
  );
}
