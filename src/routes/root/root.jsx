import { Outlet } from "react-router-dom";
import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";

export default function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
