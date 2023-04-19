import { useState } from "react";
import Logo from "../../../components/logo";
import Menu from "../menu";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(true);
  }

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <i
        className={`bx bx-menu ${styles.icon}`}
        onClick={handleMenu}
      />
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </nav>
  );
}
