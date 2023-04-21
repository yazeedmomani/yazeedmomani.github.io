import styles from "./list.module.scss";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import projects from "./list.content";
import { useState } from "react";
import Arrow from "../../../components/arrow";
import ImageCard from "../../../components/image-card";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/section-header";

function renderProjectList(currentPage, itemsPerPage) {
  const startIndex = currentPage - 1;
  const endIndex = startIndex + itemsPerPage;
  const renderedProjects = projects.slice(startIndex, endIndex);

  return (
    <>
      {renderedProjects.map((current, index) => (
        <Link
          to={current.to}
          key={index}>
          <ImageCard
            animated
            className={styles.imageCard}
            alt={current.alt}
            src={current.image}
          />
        </Link>
      ))}
    </>
  );
}

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <>
      <SectionHeader
        className={styles.sectionHeader}
        title="My accomplished projects"
        name="projects"
      />
      {renderProjectList(currentPage, itemsPerPage)}
      <Pagination
        simple
        current={currentPage} // set the current page number
        total={projects.length} // set the total number of items
        pageSize={itemsPerPage} // set the number of items per page
        onChange={setCurrentPage} // define a function to handle page changes
        prevIcon={<Arrow direction="left" />}
        nextIcon={<Arrow direction="right" />}
      />
    </>
  );
}
