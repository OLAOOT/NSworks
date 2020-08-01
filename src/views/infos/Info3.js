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

export default function Info3() {
  const classes = useStyles();
  return (
    <div>
      <div className="info_container" id="info_container3">
        <div className="article">
          <div className="article_top">
            <div>
              <span>Major Service Partners</span>
            </div>
            <div>
              고객사의 환경에 최적화된 인프라 구축을 위한 컨설팅을 통해 제품
              판매 및 솔루션을 제공함은 물론 현재 사용중인 Server Storage의
              유지보수 서비스를 제공하고 있습니다. 고객사의 비즈니스 성공을 위해
              최선을 다하는 NSworks가 되겠습니다.
            </div>
          </div>
          <div className="article_mid">
            <Paper elevation={3}>
              <img src={img4} />
              <div>기업</div>
              <div>파트너사 로고 및 링크 삽입 예정</div>
            </Paper>
            <Paper elevation={3}>
              <img src={img4} />
              <div>공공</div>
              <div>파트너사 로고 및 링크 삽입 예정</div>
            </Paper>
            <Paper elevation={3}>
              <img src={img4} />
              <div>병원</div>
              <div>파트너사 로고 및 링크 삽입 예정</div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}