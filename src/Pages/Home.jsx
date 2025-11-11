import React from "react";
import LatestVehicles from "../Components/LatestVehicles/LatestVehicles";
import Banner from "../Components/Banner/Banner";
import AboutUs from "../Components/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <Banner></Banner>
      </div>
      <AboutUs></AboutUs>
      <LatestVehicles></LatestVehicles>
    </div>
  );
};

export default Home;
