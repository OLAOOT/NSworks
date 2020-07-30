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
import "../../css/info.css";

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
  }
}));

export default function Info1() {
  const classes = useStyles();
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
              가상화를 고객에게 제공하는 기술력 있는 기업입니다. IT인프라의
              기초가 되는 서버, 서버운영체제, 스토리지, 네트워크, 보안, 가상화에
              대한 전문 엔지니어를 통해 고객의 복잡하고 다양한 요구를
              수행합니다.
            </div>
          </div>
          <div className="article_mid">
            <Paper elevation={3}>
              <img src={img1} alt="empty" />
              <div>제품 개발</div>
              <div>
                HP, IBM, Dell서버, 스토리지, 백업장비, /Cisco, HP, Dell, Alcatel
                Network 장비판매 MS, Linux 관련 OS및 SW판매
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={img2} alt="empty" />
              <div>솔루션</div>
              <div>
                Citrix, Microsoft, Cisco, VMware, HP, Dell의 인프라 구축 및
                기술지원
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={img2} alt="empty" />
              <div>컨설팅</div>
              <div>
                고객사 환경에 최적화된 HW, SW, Network 인프라 구축을 위한 솔루션
                컨설팅 재해 방지를 위한 백업및 보안 컨설팅
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={img1} alt="empty" />
              <div>유지보수</div>
              <div>
                HP Industrial Server Storage 충북, 세종 공인 지원센터 Dell 충북,
                충남, 세종 공인 지원센터 기업, 대학, 병원 등 유지보수
              </div>
            </Paper>
          </div>
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
              <div>
                사업분야 텍스트를 입력하세요. 이 텍스트는 Dummy Text 입니다.
                사업분야 텍스트를 입력하세요.
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={img4} />
              <div>공공</div>
              <div>
                Citrix, Microsoft, Cisco, VMware, HP, Dell의 인프라 구축 및
                기술지원
              </div>
            </Paper>
            <Paper elevation={3}>
              <img src={img4} />
              <div>병원</div>
              <div>
                고객사 환경에 최적화된 HW, SW, Network 인프라 구축을 위한 솔루션
                컨설팅 재해 방지를 위한 백업및 보안 컨설팅
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
