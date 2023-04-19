import { Outlet } from "react-router-dom";
import Nav from "../../layouts/nav";

export default function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
