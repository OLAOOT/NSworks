import React from "react";
// import Image from "./Image";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

import banner from "./../../img/banner1.png";

const SlideContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 80px;
  height: 300px;
`;
const ImageContainer = styled.div`
  width: 100%;
<<<<<<< HEAD
  height: 100%;
  vertical-align: middle;
`;

const TextContainer = styled.div`
=======
  height:100%;
  overflow:hidden;
`;

const Image = styled.img`
  max-width:3840px;
  
`;

const Text_container = styled.div`
>>>>>>> ksh2
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Title = styled.div`
<<<<<<< HEAD
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
=======
  font-size:50px;
  font-weight:bold;
  color:#000000;
  text-align:center;
>>>>>>> ksh2
`;

const TopImage = ({ data }) => {
  return (
    <SlideContainer>
      <ImageContainer>
<<<<<<< HEAD
        <Image src={require(data.image)} alt="image" />
=======
        <Image src={banner} alt="image" />
>>>>>>> ksh2
      </ImageContainer>
      <TextContainer>
        <Title>{data.title}</Title>
      </TextContainer>
    </SlideContainer>
  );
};

export default TopImage;
