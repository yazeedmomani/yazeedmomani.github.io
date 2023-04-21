import styles from "./breadcrumb.module.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function renderItem(itemsLength, currentItem, currentIndex) {
  if (itemsLength - 1 === currentIndex) return <span key={currentIndex}>{currentItem.text}</span>;

  return (
    <Fragment key={currentIndex}>
      <Link to={currentItem.to}>{currentItem.text}</Link>
      <i className="bx bx-chevron-right"></i>
    </Fragment>
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
