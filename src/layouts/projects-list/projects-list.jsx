import styles from "./projects-list.module.scss";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import projects from "./projects-list.content";
import { useState } from "react";
import Arrow from "../../components/arrow";

function renderProjectList(currentPage, itemsPerPage) {
  const startIndex = currentPage - 1;
  const endIndex = startIndex + itemsPerPage;
  const renderedProjects = projects.slice(startIndex, endIndex);

  return (
    <>
      {renderedProjects.map((current) => (
        <h1>{current.alt}</h1>
      ))}
    </>
  );
}

export default function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  return (
    <>
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
