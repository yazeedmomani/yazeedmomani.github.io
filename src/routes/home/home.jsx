import Header from "../../layouts/home/header";
import HowItWorks from "../../layouts/home/how-it-works";
import Portfolio from "../../layouts/home/portfolio";
import AboutMe from "../../layouts/home/about-me";
import CTA from "../../layouts/general/cta";

export default function Home() {
  return (
    <main>
      <Header />
      <HowItWorks />
      <Portfolio />
      <AboutMe />
      <CTA />
    </main>
  );
}
