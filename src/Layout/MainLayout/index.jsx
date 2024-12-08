import Footer from "../../commoncomponents/Footer";
import Navbar from "../../commoncomponents/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="p-0">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default MainLayout;
