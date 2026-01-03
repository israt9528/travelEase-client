import React from "react";
import LatestVehicles from "../Components/LatestVehicles/LatestVehicles";
import Banner from "../Components/Banner/Banner";
import AboutUs from "../Components/AboutUs/AboutUs";
import Owners from "../Components/Owners/Owners";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import Testimonials from "../Components/Testimonials/Testimonials";
import FAQ from "../Components/FAQ/FAQ";
import CTA from "../Components/CTA/CTA";
import Stats from "../Components/Stats/Stats";
import SafetyAssurance from "../Components/SafetyAssurance/SafetyAssurance";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Banner></Banner>
      </div>
      <LatestVehicles></LatestVehicles>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
      <AboutUs></AboutUs>
      <SafetyAssurance></SafetyAssurance>
      <Owners></Owners>
      <Testimonials></Testimonials>

      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  );
};

export default Home;
