import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavMenu from "./NavMenu";

export default function Root() {
  return (
    <>
      <Header />
      <NavMenu />
      <Outlet />
    </>
  );
}
