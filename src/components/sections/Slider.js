import React from "react";
import Image from "../elements/Image";
import Hero from "./Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { values } from "lodash";

const Slide = styled.div`
  margin: 10px auto;
  position: relative;
`;
const ImageContainer = styled.div`
  width: 100%;
  vertical-align: middle;
`;
const HeroContainer = styled.div`
  padding: 5px 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
        <div key={v.title}>
          <Slide>
            <ImageContainer>
              <Image src={require(v.image)} alt="00" />
            </ImageContainer>
            <HeroContainer>
              <Hero data={v} />
            </HeroContainer>
          </Slide>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
