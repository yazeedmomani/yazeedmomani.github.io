import styles from "./section-header.module.scss";

export default function SectionHeader({ className, children, sectionName }) {
  const spanClass = `${styles.span} ${className}`;

  return (
    <>
      <span className={spanClass}>{sectionName}</span>
      <h2>{children}</h2>
    </>
  );
}
