import styles from "./description.module.scss";
import data from "./description.content";
import { useParams } from "react-router-dom";
import ImageCard from "../../../components/image-card";
import MultiInfoHeader from "../../../components/multi-info-header";

export default function Description() {
  const { id } = useParams();
  const projectData = data.find((current) => current.id === id);
  const { name, image, alt, statements, paragraphs, link } = projectData;

  return (
    <article>
      <h2>{name}</h2>
      <ImageCard
        src={image}
        alt={alt}
        animated
      />
      <MultiInfoHeader statements={statements} />
      {paragraphs.map((current, index) => (
        <p key={index}>{current}</p>
      ))}
      <a href={link}>{link}</a>
    </article>
  );
}
