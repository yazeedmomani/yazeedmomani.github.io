import Breadcrumb from "../../components/breadcrumb";
import styles from "./projects.module.scss";
import List from "../../layouts/projects/list";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Projects | Yaz</title>
      </Helmet>
      <Breadcrumb
        items={BREADCRUMB_ITEMS}
        className={styles.breadcrumb}
      />
      <List />
    </main>
  );
}
