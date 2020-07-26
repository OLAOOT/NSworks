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

import $ from 'jquery';
window.$ = $;

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "인사말"
};

export default function Info2() { 
  
  return (
    <div>
      {window.location.href.indexOf('info') === 22 ? (
        <TopImage data={img_data} />) :
        (<div></div>)
      }      
      <div className="info_container" id="info_container2">
        <div className="header">
          <div>
            <p>
              The world's most powerful
              <br /> NSworks Service Team
            </p>
            <div>
              <p>01</p>
              <p>
                <p>Paradigm</p> 최적의 가상화, 디지털 기술, 빅데이터 역량을 활용
              </p>
            </div>
            <div>
              <p>02</p>
              <p>
                <p>Service</p> 고객 여러분께서 쉽게 체감하실 수 있는 실용적인
                상품과 서비스
              </p>
            </div>
          </div>
        </div>
        <div className="article" id="article2">
          <div className="article_top">
            <div>
              <span>CEO 인사말</span>
            </div>
          </div>
          <div className="article_mid2">
            <div>
              <img src={ceo} />
            </div>
            <div>
              안녕하세요 NSworks CEO 최일준 입니다
              <br />
              <br />
              네트워크를 통한 정보의 연결과 이동은 보다 나은 삶의 발전과 인간의
              소중한 가치를 실현하는데 의의가 있습니다. NSworks는 이러한
              프레임워크와 함께 고개과 만납니다. 신뢰와 정성으로 네트워크 기반
              통합 비즈니스 환경을 구현하기 위하여 우수한 기술 인력을 바탕으로
              최고의 서비스 품질을 제공합니다. 인간 존중과 미래지향의 가치를
              위하여 가장 안전하고 효율적인 방식과 기법으로 고객만족에
              부응하고자 합니다., 더불어 NSworks가 추구하고자 하는 네트워크와
              정보통신에 대한 모든 기여와 봉사는 궁극적인 파트너십에서
              출발합니다. 귀사의 발전에 NSworks가 함께 하겠습니다. 감사합니다.
            </div>
          </div>
          <div className="article_mid">
            <Paper elevation={3} id="paper">
              <img src={img1} />
              <div>서비스의 품격과 가치를 높이겠습니다</div>
              <div>
                고객 여러분께서 쉽게 체감하실 수 있는 실용적인 상품과 서비스를
                만들겠습니다. 작고 사소한 것이라도 지속적으로 혁신하여, 고객
                여러분께 꼭 필요한 서비스를 의미 있는 가치로 제공하겠습니다.
              </div>
            </Paper>
            <Paper elevation={3} id="paper">
              <img src={img2} />
              <div>상생과 나눔의 경영을 실천하겠습니다</div>
              <div>
                사회공헌활동에 더욱 힘쓰고, 열린나눔 플랫폼을 통해 여러분과 함께
                나눔의 문화를 만들어 가겠습니다. NSworks의 도전과 실천을 통해 더
                편리하고 더 행복한 내일을 향해 경주하겠습니다.
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
