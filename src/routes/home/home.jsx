import Header from "../../layouts/home/header";
import HowItWorks from "../../layouts/home/how-it-works";
import Portfolio from "../../layouts/home/portfolio";
import AboutMe from "../../layouts/home/about-me";
import CTA from "../../layouts/general/cta";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Yaz | Designing Tomorrow's Web, One Pixel at a Time</title>
      </Helmet>
      <Header />
      <HowItWorks />
      <Portfolio />
      <AboutMe />
      <CTA />
    </main>
  );
}
