import styles from "./breadcrumb.module.scss";
import { Link } from "react-router-dom";

function renderItem(itemsLength, currentItem, currentIndex) {
  if (itemsLength - 1 === currentIndex) return <span>{currentItem.text}</span>;

  return (
    <>
      <Link to={currentItem.to}>{currentItem.text}</Link>
      <i className="bx bx-chevron-right"></i>
    </>
  );
}

export default function Breadcrumb({ items, className }) {
  const itemsLength = items.length;

  return (
    <div className={`${styles.breadcrumb} ${className}`}>
      {items.map((current, index) => renderItem(itemsLength, current, index))}
    </div>
  );
}
