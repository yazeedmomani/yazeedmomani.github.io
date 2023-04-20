import styles from "./section-header.module.scss";

export default function SectionHeader({ className, title, name, dark }) {
  const spanClass = `${styles.span} ${dark && styles.dark} ${className}`;

  return (
    <>
      <span className={spanClass}>{name.toUpperCase()}</span>
      <h2>{title}</h2>
    </>
  );
}
