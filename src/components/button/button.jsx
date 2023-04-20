import styles from "./button.module.scss";

export default function Button({ className, children, primary, ...props }) {
  const buttonClass = `${styles.btn} ${primary && styles.primary} ${className}`;

  return (
    <a
      role="button"
      className={buttonClass}
      {...props}>
      {children}
    </a>
  );
}
