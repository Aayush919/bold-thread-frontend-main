import { useEffect } from "react";
import Footer from "../../commoncomponents/Footer";
import Navbar from "../../commoncomponents/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);

  return (
    <div className="p-0">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default MainLayout;
