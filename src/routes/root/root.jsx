import { Outlet } from "react-router-dom";
import Nav from "../../layouts/general/nav";
import Footer from "../../layouts/general/footer";

export default function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
