/*global kakao */
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
import logo from "./../../img/logo.png";

import "../../css/info.css";

import $ from "jquery";
window.$ = $;

export default function Info5() {
  if (window.location.href.indexOf("location")) {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c32c1763e65921610b0b14021a17138f&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(36.4864563, 127.2574583),
          level: 4
        };

        const map = new window.kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(36.4864563, 127.2574583);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        map.setZoomable(false);
        map.setDraggable(false);
      });
    };
  }
  return (
    <div>
      {/* {window.location.href.indexOf('info') === 22  ? (img_data.map(v => (
           <TopImage data={v} />
        ))) : (<div></div>)} */}
      <div className="info_container" id="info_container5">
        <div className="article" id="article4">
          <table className="type03">
            <tbody>
              <tr>
                <th scope="row">회사명</th>
                <td>엔에스웍스(주)</td>
              </tr>
              <tr>
                <th scope="row">대표</th>
                <td>최일준</td>
              </tr>
              <tr>
                <th scope="row">설립일</th>
                <td>2012년 2월 22일</td>
              </tr>
              <tr>
                <th scope="row">주요사업</th>
                <td>
                  가상화 / 서버, 스토리지, 네트워크 구축 및 유지보수 / 컨설팅
                </td>
              </tr>
              <tr>
                <th scope="row">소재지</th>
                <td>
                  세종특별시 한누리대로 249, 609호
                  <br className="mobile" />
                  (나성동, 에스제이타워)
                </td>
              </tr>
              <tr>
                <th scope="row">연락처</th>
                <td>TEL 070-4232-2240 / FAX 044-868-2240</td>
              </tr>
              <tr>
                <th scope="row">이메일</th>
                <td>contact@nsworks.co.kr</td>
              </tr>
            </tbody>
          </table>
          <div id="map_container">
            <div id="contact_container">
              <div>
                <img src={logo} />
              </div>
              <div id="contact">
                세종특별시 한누리대로 249, 609호
                <br />
                (나성동, 에스제이타워)
                <br />
                <span>TEL</span> 070-4232-2240
                <br />
                <span>FAX</span> 044-868-2240
              </div>
            </div>
            <div id="Mymap" />
          </div>
        </div>
      </div>
    </div>
  );
}
