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

export default function Breadcrumb({ items }) {
  const itemsLength = items.length;

  return (
    <div className={styles.breadcrumb}>
      {items.map((current, index) => renderItem(itemsLength, current, index))}
    </div>
  );
}

/*
NOTE Below is an example of how `items` should look like

items = [
    {
        text: "Home",
        to: "/",
    },
    {
        text: "Projects",
        to: "/projects",
    },
    {
        text: "Josor Steels",
    }
]

NOTE Last item in items always does not have a `to` property.

*/
