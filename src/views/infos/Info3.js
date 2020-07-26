import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import ceo from "./../../img/ceo-1.jpg";
import img1 from "./../../img/img_ccai1.png";
import img2 from "./../../img/img_ccai2.png";

import "../../css/info.css";

const useStyles = makeStyles(theme => ({
  article_mid: {
    display: "flex",
    marginTop: 500,
    flexWrap: "wrap",
    justifyContent: "center",

    "& > *": {
      margin: "1%",
      width: "30%",
      minWidth: "250px",
      height: 550
    },
    "& > * > img": {
      position: "relative",
      left: 0,
      width: "100%",
      maxHeight: "200px"
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
  }
}));

const img_data = [
  {
    image: "./../../img/slider1.jpg",
    title: "연혁"
  }
];

export default function Info3() {
  const classes = useStyles();
  return (
    <div>
      {/* {img_data.map(v => (
          <TopImage data={v} />
        ))} */}
      {/* <div className="info_container" /> */}
      <div> Info3 ~~~~~ </div>
    </div>
  );
}
