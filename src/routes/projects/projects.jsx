import Breadcrumb from "../../components/breadcrumb";
import styles from "./projects.module.scss";

const BREADCRUMB_ITEMS = [
  {
    to: "/",
    text: "Home",
  },
  {
    text: "Projects",
  },
];

export default function Projects() {
  return (
    <main className={styles.main}>
      <Breadcrumb
        items={BREADCRUMB_ITEMS}
        className={styles.breadcrumb}
      />
    </main>
  );
}
