import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import history from "./../../img/history.jpg";


import "../../css/info.css";

const useStyles = makeStyles(theme => ({
  img: {
    position:"relative",
    left:'50%',
    transform:'translateX(-50%)',
    marginTop: 500,
    flexWrap: "wrap",
    
    width:'95%',
    maxWidth:800
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
      {window.location.href.indexOf('info') ? (
        img_data.map(v => (
          <TopImage data={v} />
        ))):(<div></div>)}
      <div className="info_container">
          <div className="article">
            <img src={history} className={classes.img}/>          
          </div>
        </div>
    </div>
  );
}
