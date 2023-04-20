import styles from "./image-card.module.scss";

export default function ImageCard({ className, onClick, animated, ...props }) {
  const classes = `${styles.card} ${onClick && styles.clickable} ${
    animated && styles.animated
  } ${className}`;

  return (
    <div
      className={classes}
      onClick={onClick}>
      <img {...props} />
    </div>
  );
}
