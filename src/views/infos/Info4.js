import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";
import history from "./../../img/history.png";
import "../../css/info.css";
import img4 from "./../../img/img_ccai.png";
import $ from "jquery";
window.$ = $;

const useStyles = makeStyles(theme => ({
  img: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    paddingTop: 50,
    flexWrap: "wrap",

    width: "95%",
    maxWidth: 800
  }
}));

const img_data = [
  {
    image: "./../../img/slider1.jpg",
    title: "연혁"
  }
];

export default function Info4() {
  const classes = useStyles();
  return (
    <div>
      {window.location.href.indexOf("info") === 22 ? (
        img_data.map(v => <TopImage data={v} />)
      ) : (
        <div />
      )}
      <div className="info_container" id="info_container4">
        <div className="article">
          <img src={history} className={classes.img} />
        </div>
      </div>
    </div>
  );
}
