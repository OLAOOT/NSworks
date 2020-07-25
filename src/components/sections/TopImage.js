import React from "react";
// import Image from "./Image";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import Hero from "../sections/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import img3 from "./../../img/slider3.jpg";

const SlideContainer = styled.div`
  position: absolute;
  left:0;
  width:100%;
  top:80px;
  height:300px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height:100%;
  vertical-align: middle;
`;

const Image = styled.img`
  width: 100%;
  height:100%;
`;

const Text_container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;  
  transform:translateY(-50%);
  width:100%;
`;

const Title = styled.div`
  font-size:50px;
  font-weight:bold;
  color:#ffffff;
  text-align:center;
`;

const TopImage = ({ data }) => {
  return (
    <SlideContainer>
      <ImageContainer>
        <Image src={img3} alt="image" />
      </ImageContainer>
      <Text_container>
        <Title>{data.title}</Title>
      </Text_container>
    </SlideContainer>
  );
};

export default TopImage;
