import styles from "./breadcrumb.module.scss";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <Link>Home</Link>
      <i className="bx bx-chevron-right"></i>
      <Link>Projects</Link>
      <i className="bx bx-chevron-right"></i>
      <span>Josor Steels</span>
    </div>
  );
}
