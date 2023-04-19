import Header from "../../layouts/home/header";
import HowItWorks from "../../layouts/home/how-it-works";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HowItWorks />
    </main>
  );
}
