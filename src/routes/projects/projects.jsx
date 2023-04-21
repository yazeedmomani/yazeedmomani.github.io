import Breadcrumb from "../../components/breadcrumb";
import styles from "./projects.module.scss";
import List from "../../layouts/projects/list";

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
      <List />
    </main>
  );
}
