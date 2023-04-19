import Logo from "../../components/logo/";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <i className={`bx bx-menu ${styles.icon}`} />
    </nav>
  );
}
