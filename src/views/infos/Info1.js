import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import img1 from "./../../img/slider1.jpg";
import img2 from "./../../img/slider2.jpg";
import img3 from "./../../img/slider3.jpg";
import img4 from "./../../img/img_ccai.png";

import icon1 from "./../../img/icon/technical-support.png";
import icon2 from "./../../img/icon/solution.png";
import icon3 from "./../../img/icon/it.png";
import icon4 from "./../../img/icon/repair.png";


import "../../css/info.css";
import $ from "jquery";
window.$ = $;

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles(theme => ({
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
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));

export default function Info1() {
  const classes = useStyles();

  $("html").scrollTop(0);

  $(document).ready(function() {
    do_ani(".article > div > *");
    $(window).scroll(function() {
      do_ani(".article > div > *");
    });
  });

  const do_ani = target => {
    var count = 0;
    $(target).each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object / 1.3) {
        if ($(this).css("animation-name") === "tmp") count += 1;

        $(this)
          .css("animation-name", "slide1")
          .delay(200 * count);
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  };

  return (
    <div>
      {/* {window.location.href.indexOf('info') ?  (
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          className={classes.slider}
        >
          <div data-src={img1}>
            <p className="slider_text">
              고객만족을 위한
              <br />
              최고기술
            </p>
          </div>
          <div data-src={img2}>
            <p className="slider_text">
              이익실현을 위한
              <br />
              효율경영
            </p>
          </div>
          <div data-src={img3}>
            <p className="slider_text">
              동반성장을 위한
              <br />
              파트너쉽
            </p>
          </div>
        </AutoplaySlider>
        ) : (<div></div>)
      } */}
      <div className="info_container" id="info_container1">
        <div className="article" id="article1">
          <div className="article_top">
            <div>
              <span id="info1">
                Virtualizing Your Information Infrastructure
              </span>
            </div>
            <div>
              NSworks는 서버, 스토리지, 네트워크의 전문성으로 고객의 IT 인프라를
              통합적으로 제공하며, 이를 바탕으로 안정적인 IT환경과 완성도 높은
              가상화를 고객에게 제공하는 기술력 있는 기업입니다.
              <br />
              IT인프라의 기초가 되는 서버, 서버운영체제, 스토리지, 네트워크,
              보안, 가상화에 대한 전문 엔지니어를 통해 고객의 복잡하고 다양한
              요구를 수행합니다.
            </div>
          </div>
          <div className="article_mid">
            <Paper elevation={3} className={classes.paper}>
              <img src={icon1} alt="empty" />
              <div>IT 컨설팅</div>
              <div>
                고객사 환경에 최적화된 HW, SW, Network
                <br />
                인프라 구축을 위한
                <br className="pc" />
                <br className="mobile" /> 솔루션 컨설팅
                <br /> 재해 방지를 위한 백업 및 보안 컨설팅
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={icon2} alt="empty" />
              <div>솔루션 공급</div>
              <div>
                Citrix, Microsoft, Cisco, VMware, HP, Dell의
                <br className="pc" /> 인프라 구축 및 기술지원
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={icon3} alt="empty" />
              <div>HW/SW 판매</div>
              <div>
                HP, IBM, Dell 서버, <br className="pc" />
                <br className="mobile" />
                스토리지, 백업 장비
                <br className="mobile" /> 판매
                <br />
                Cisco, HP, Dell, Alcatel Network 장비 판매
                <br />
                MS, Linux 관련 OS 및 SW판매
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={icon4} alt="empty" />
              <div>통합유지보수</div>
              <div>
                HP Industrial Server Storage 충북, 세종 <br className="pc" />
                공인 지원센터
                <br />
                Dell 충북, 충남, 세종 <br className="pc" />
                공인 지원센터
                <br /> 기업, 대학, 병원 등<br className="pc" />
                유지보수
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
