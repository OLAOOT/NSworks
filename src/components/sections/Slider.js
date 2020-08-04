import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import Hero from "./Hero";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import "./../../css/header.css";
import banner from "./../../img/slider1.jpg";

const useStyles = makeStyles(theme => ({
  article_mid: {
    display: "flex",
    marginTop: 50,
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: "1%",
      width: "23%",
      minWidth: "250px",
      height: 480
    },
    "& > * > img": {
      position: "relative",
      left: 0
    },
    "& > * > div": {
      textAlign: "left",
      padding: "25px 40px 0px",
      fontSize: 19,
      fontWeight: "bold"
    },
    "& > * > div:last-child": {
      fontWeight: "normal"
    }
  },
  slider: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "64px",
    height: 400,
    "&  .awssld__bullets": {
      display: "none"
    },
    "& .awssld__controls button": {
      opacity: "0"
    }
  }
}));

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ data }) => {
  const [play, setPlay] = useState(true);
  const classes = useStyles();
  const handleMouseOver = () => {
    setPlay(false);
  };
  const handleMouseOut = () => {
    setPlay(true);
  };
  return (
    <div>
      <AutoplaySlider
        play={play}
        cancelOnInteraction={false}
        interval={3000}
        className={classes.slider}
        id="slider"
      >
        {data.map(v => (
          <div
            data-src={banner} //data-src={require(v.image)}
            key={v.title}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Hero data={v} play={play} key={v}/>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
