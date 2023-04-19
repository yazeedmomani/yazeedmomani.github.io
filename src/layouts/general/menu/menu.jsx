// Imports
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

// Menu component
export default function Menu({ setShowMenu }) {
  // Event handlers
  function handleCloseClick(e) {
    setShowMenu(false);
  }

  // Portal target
  const target = document.getElementById("modal");

  // Component JSX
  return createPortal(
    <div
      className={styles.backdrop}
      onClick={handleCloseClick}>
      <div className={styles.iconContainer}>
        <i class={`bx bx-x ${styles.icon}`}></i>
      </div>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>,
    target
  );
}
