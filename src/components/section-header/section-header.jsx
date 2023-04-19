import styles from "./section-header.module.scss";

export default function SectionHeader({
  className,
  sectionTitle,
  sectionName,
  dark,
}) {
  const spanClass = `${styles.span} ${dark && styles.dark} ${className}`;

  return (
    <>
      <span className={spanClass}>{sectionName.toUpperCase()}</span>
      <h2>{sectionTitle}</h2>
    </>
  );
}
