import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import Hero from "./Hero";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import banner from "./../../img/banner_w.png";

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
    top: "80px",
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
  const classes = useStyles();
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        className={classes.slider}
      >
        {data.map(v => (
          <div data-src={require(v.image)} key={v.image}>
            <Hero data={v} />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
