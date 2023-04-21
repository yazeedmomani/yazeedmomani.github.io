import styles from "./project.module.scss";
import Breadcrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import data from "../../layouts/project/description/description.content";
import Description from "../../layouts/project/description";

export default function Project() {
  const { id } = useParams();

  const projectName = data.find((current) => current.id === id).name;

  const breadcrumbItems = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/projects",
      text: "Projects",
    },
    {
      text: projectName,
    },
  ];

  return (
    <main className={styles.main}>
      <Breadcrumb
        className={styles.breadcrumb}
        items={breadcrumbItems}
      />
      <Description />
    </main>
  );
}
