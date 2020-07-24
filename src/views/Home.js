import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Slider from "../components/sections/Slider";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default Home;
