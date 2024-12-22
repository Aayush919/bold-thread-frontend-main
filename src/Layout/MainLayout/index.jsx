import { useEffect } from "react";
import Footer from "../../commoncomponents/Footer";
import Navbar from "../../commoncomponents/Navbar";
import { Outlet } from "react-router-dom";
import UserProfile from '../../pages/UserProfile'


const MainLayout = () => {


  return (
    <div className="p-0">
      <Navbar />
      <Outlet />
      <Footer />
      <UserProfile />
    </div>
  );
};

export default MainLayout;
