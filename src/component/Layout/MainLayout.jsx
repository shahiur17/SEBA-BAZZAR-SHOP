import { Outlet } from "react-router-dom";
import Footte from "../Footer/Footte";
import Navbar from "../NavbarSection/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footte />
    </div>
  );
};

export default MainLayout;
