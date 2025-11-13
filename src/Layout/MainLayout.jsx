import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../Components/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <div className="relative min-h-screen">
        <Navbar isHome={isHome}></Navbar>
        <section>
          {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
