import { Outlet } from "react-router-dom";
import Navbar from "../NavbarSection/navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
