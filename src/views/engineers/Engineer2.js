import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import maintenance1 from "./../../img/maintenance1.png";
import maintenance2 from "./../../img/maintenance2.png";



import "../../css/maintenance.css";

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "유지보수"
};

export default function Engineer2() {
  return (
    <div>
      <TopImage data={img_data} />
      <div className="maintenance_container">
        <div className="article">
          <div className="article_top">
            <div>
              <span>서버 스토리지 통합 유지보수</span>
            </div>
          </div>
          <div className="article_mid">
            <img src={maintenance1} />
          </div>
          <div className="article_top">
            <div>
              <span>유지보수 대상고객</span>
            </div>
          </div>
          <div className="article_mid">
            <img src={maintenance2} />
            <div>
                <ul>
                    <li>서버를 관리하는 전문 인력이 없는 고객</li>
                    <li>체계적인 장비관리가 필요한 고객</li>
                    <li>전산실의 비용절감과 효율적 운영을 원하는 고객</li>
                    <li>전산실의 아웃소싱을 원하는 고객</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
