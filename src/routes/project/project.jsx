import styles from "./project.module.scss";
import Breadcrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import data from "../../layouts/project/description/description.content";
import Description from "../../layouts/project/description";
import { Helmet } from "react-helmet-async";

export default function Project() {
  const { id } = useParams();

  const projectName = data.find((current) => current.id === id)?.name;

  if (!projectName) return <p className={styles.notFound}>404 Not Found</p>;

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
      <Helmet>
        <title>{projectName} | Yaz</title>
      </Helmet>
      <Breadcrumb
        className={styles.breadcrumb}
        items={breadcrumbItems}
      />
      <Description />
    </main>
  );
}
