import styles from "./multi-info-header.module.scss";

export default function MultiInfoHeader({ className, title, statements }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h3>{title}</h3>}
      {statements &&
        statements.map((current, index) => <span key={index}>{current}</span>)}
    </div>
  );
}

/*
NOTE statements prop accepts an array of statements and turn them to spans
*/
