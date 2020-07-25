import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TitleImage from "../elements/TitleImage";

const heroData = [
  {
    image: "./../../assets/images/features-split-image-01.png",
    title: "NSWorks",
    subtitle: "Always Do the Best",
    description: "아무말"
  },
  {
    image: "./../../assets/images/features-split-image-02.png",
    title: "NSWorks2",
    subtitle: "Always Do the Best",
    description: "아무말"
  },
  {
    image: "./../../assets/images/features-split-image-03.png",
    title: "NSWorks3",
    subtitle: "Always Do the Best",
    description: "아무말"
  }
];

const Slider = () => {
  return (
    <Carousel autoplay>
      {heroData.map(v => (
        <TitleImage data={v} />
      ))}
    </Carousel>
  );
};

export default Slider;
