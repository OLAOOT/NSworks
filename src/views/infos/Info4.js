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
import office1 from "./../../img/office1.jpeg";
import office2 from "./../../img/office2.jpeg";
import $ from "jquery";
window.$ = $;

const useStyles = makeStyles((theme) => ({
  img: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    flexWrap: "wrap",

    width: "95%",
    maxWidth: 800
  },
  img_div: {
    width: "100% !important",
    maxWidth: "500px",
    border: "1px solid #ccc",
    padding: "10px !important"
  },
  img2: {
    width: "100% !important",
    paddingTop: "0px !important"
  }
}));

export default function Info4() {
  const classes = useStyles();
  return (
    <div>
      {/* {window.location.href.indexOf("info") === 22 ? (
        img_data.map(v => <TopImage data={v} />)
      ) : (
        <div />
      )} */}
      <div className="info_container" id="info_container4">
        <div className="article">
          <div className="article_top">
            <div>
              <span id="info1">History</span>
            </div>
          </div>
          <img src={history} className={classes.img} />
        </div>
        <div className="article_top">
          <div>
            <span id="info1">회사 내부 전경</span>
          </div>
        </div>
        <div className="article_mid">
          <div className={classes.img_div}>
            <img src={office1} className={classes.img2} />
          </div>
          <div className={classes.img_div}>
            <img src={office2} className={classes.img2} />
          </div>
        </div>
      </div>
    </div>
  );
}
