import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Slider from "../components/sections/Slider";

const heroData = [
  {
    image: "./../../assets/images/features-split-image-01.png",
    title: "NSWorks",
    subtitle: "Always Do the Best",
    description: "아무말",
    button: "/href" //링크 넣기. 빈칸으로 남기면 버튼 사라짐
  },
  {
    image: "./../../assets/images/features-split-image-02.png",
    title: "NSWorks2",
    subtitle: "Always Do the Best",
    description: "아무말",
    button: "/href"
  },
  {
    image: "./../../assets/images/features-split-image-03.png",
    title: "NSWorks3",
    subtitle: "Always Do the Best",
    description: "아무말",
    button: "/href"
  },
  {
    image: "./../../assets/images/features-split-image-03.png",
    title: "NSWorks4",
    subtitle: "Always Do the Best",
    description: "아무말",
    button: "/href"
  }
];

const Home = () => {
  return (
    <>
      <Slider data={heroData} />
      <FeaturesSplit
        invertMobile
        imageFill
        className="illustration-section-02"
        style={{
          paddingTop: "500px"
        }}
      />
    </>
  );
};

export default Home;
