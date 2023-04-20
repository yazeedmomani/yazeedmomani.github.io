import Breadcrumb from "../../components/breadcrumb";

const BREADCRUMB_ITEMS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
  },
];

export default function About() {
  return (
    <main>
      <Breadcrumb items={BREADCRUMB_ITEMS} />
    </main>
  );
}
