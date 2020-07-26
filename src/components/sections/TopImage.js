import React from "react";
// import Image from "./Image";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

import banner from "./../../img/banner_w.png";

const SlideContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  top: 80px;
  height: 300px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height:100%;
  overflow:hidden;
`;

const Image = styled.img`
  max-width:3840px;
  
`;

const Text_container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Title = styled.div`
  font-size:50px;
  font-weight:bold;
  color:#000000;
  text-align:center;
`;

const TopImage = ({ data }) => {
  return (
    <SlideContainer>
      <ImageContainer>
        <Image src={banner} alt="image" />
      </ImageContainer>
      <Text_container>
        <Title>{data.title}</Title>
      </Text_container>
    </SlideContainer>
  );
};

export default TopImage;
