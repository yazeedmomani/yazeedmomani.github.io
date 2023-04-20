import styles from "./button.module.scss";
import { Link } from "react-router-dom";

export default function Button({ className, children, primary, to, ...props }) {
  const buttonClass = `${styles.btn} ${primary && styles.primary} ${className}`;

  if (to)
    return (
      <Link
        to={to}
        className={buttonClass}>
        {children}
      </Link>
    );

  return (
    <a
      role="button"
      className={buttonClass}
      {...props}>
      {children}
    </a>
  );
}
