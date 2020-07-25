import React from "react";
// import Image from "./Image";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import Hero from "../sections/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import Image from "../elements/Image";

const SlideContainer = styled.div`
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

const TopImage = ({ key, data }) => {
  return (
    <SlideContainer>
      <ImageContainer>
        <Image src={require(data.image)} alt="image" />
      </ImageContainer>
      <HeroContainer>
        <Hero data={data} />
      </HeroContainer>
    </SlideContainer>
  );
};

export default TopImage;
