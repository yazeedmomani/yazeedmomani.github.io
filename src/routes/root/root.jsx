import { Outlet } from "react-router-dom";
import Nav from "../../layouts/general/nav";
import Footer from "../../layouts/general/footer";
import useScrollToTop from "../../hooks/scroll-to-top";

export default function Root() {
  useScrollToTop();

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
