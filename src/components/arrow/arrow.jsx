import styles from "./arrow.module.scss";

export default function Arrow({ direction, className, onClick }) {
  const classes = `bx bx-chevron-${direction} ${styles.arrow} ${className}`;

  return (
    <i
      className={classes}
      onClick={onClick}></i>
  );
}
