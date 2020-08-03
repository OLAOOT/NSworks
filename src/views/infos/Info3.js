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
          <div className="article_mid3">
            <div><span>&nbsp;&nbsp;기업&nbsp;&nbsp;</span> </div>
            <table border="1" id="partner_tb">
              <tr>
                <td><a href="https://www.skhynix.com/kor/main.do"><img src={img4}/>sk</a></td>
                <td><a href="https://www.continental.com/en"><img src={img4}/>continental</a></td>
                <td><a href="https://www.lge.co.kr/lgekor/main.do"><img src={img4}/>lg</a></td>
                <td><a href="https://itshanbul.com/"><img src={img4}/>한불</a></td>
              </tr>
              <tr>
                <td><a href="https://www.lselectric.co.kr/ko/#"><img src={img4}/>ls</a></td>
                <td><a href="https://www.dunkindonuts.co.kr/"><img src={img4}/>던킨</a></td>
                <td><a href="https://www.nestle.co.kr/"><img src={img4}/>nestle</a></td>
                <td><a href="https://dbhitek.com/kr/default.asp"><img src={img4}/>동부하이텍</a></td>
              </tr>
              <tr>
                <td><a href="https://www.cctimes.kr/"><img src={img4}/>충청타임즈</a></td>
                <td><a href="https://jsrmicro.co.kr/html/main/main.html"><img src={img4}/>jsr micro</a></td>
                <td><a href="https://www.autonics.com/main"><img src={img4}/>autonics</a></td>
                <td></td>
              </tr>
            </table>
            <div><span>&nbsp;&nbsp;공공&nbsp;&nbsp;</span> </div>
            <table border="1">
              <tr>
                <td><a href="http://www.jecheon.go.kr/site/corona_new/intro_new.html"><img src={img4}/>제천시</a></td>
                <td><a href="https://www.kuh.ac.kr/main.do"><img src={img4}/>건대병원</a></td>
                <td><a href="https://www.cjmct.or.kr/"><img src={img4}/>충주의료원</a></td>
                <td><a href="https://www.hshospital.co.kr/ko/index.php"><img src={img4}/>효성</a></td>
              </tr>
              <tr>
                <td><a href="http://www.hanhsp.co.kr/index.asp?"><img src={img4}/>한국병원</a></td>
                <td><a href="https://www.kwater.or.kr/main.do?s_mid=1"><img src={img4}/>한국 수자원</a></td>
                <td><a href="https://www.weather.go.kr/w/index.do"><img src={img4}/>기상청</a></td>
                <td></td>
              </tr>
            </table>
            <div><span>&nbsp;&nbsp;교육&nbsp;&nbsp;</span> </div>
            <table border="1">
              <tr>
                <td><a href="https://www.ut.ac.kr/"><img src={img4}/>교통대</a></td>
                <td><a href="http://www.semyung.ac.kr/kor.do"><img src={img4}/>세명대</a></td>
                <td><a href="http://www.konkuk.ac.kr/do/Index.do"><img src={img4}/>건대</a></td>
                <td><a href="https://www.tw.ac.kr/"><img src={img4}/>동원대</a></td>
              </tr>
              <tr>
                <td><a href="https://www.kaywon.ac.kr/CmsHome/MainDefault.aspx"><img src={img4}/>계원예대</a></td>
                <td><a href="https://www.gangdong.ac.kr/intro.jsp"><img src={img4}/>강동대</a></td>
                <td><a href="https://www.chsu.ac.kr/CmsHome/intro_00019991.aspx"><img src={img4}/>충북보건대</a></td>
                <td><a href="http://www.jwu.ac.kr/site/siteView.jwu"><img src={img4}/>중원대</a></td>
              </tr>
              <tr>
                <td><a href="http://www.kdu.ac.kr/"><img src={img4}/>극동대</a></td>
                <td><a href=""></a></td>
                <td><a href=""></a></td>
                <td><a href=""></a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}