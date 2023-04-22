import { useState } from "react";
import Logo from "../../../components/logo";
import Menu from "../menu";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";

function renderLinks(viewportWidth, handleMenu) {
  if (viewportWidth >= 900)
    return (
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Button
            primary
            href="https://www.upwork.com/freelancers/~01428ceffca847ca7a"
            target="_blank">
            Hire me
          </Button>
        </li>
      </ul>
    );

  return (
    <i
      className={`bx bx-menu ${styles.icon}`}
      onClick={handleMenu}
    />
  );
}

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();

  function handleMenu() {
    setShowMenu(true);
  }

  return (
    <nav className={styles.nav}>
      <Fade
        left
        duration={1000}
        distance="80px"
        delay={200}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </Fade>
      <Fade
        duration={1000}
        distance="80px"
        delay={200}
        right
        cascade>
        {renderLinks(width, handleMenu)}
      </Fade>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </nav>
  );
}
