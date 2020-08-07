import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import "../../css/maintenance.css";

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "원격지원"
};

export default function Engineer1() {
  return (
    <div>
      <TopImage data={img_data} />
      <div className="maintenance_container">
        <div className="article">
          <iframe src="http://rs.nsworks.co.kr/" width="100%" min-width="600px" height="1000px">
            <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
          </iframe>
        </div>
      </div>
    </div>
  );
}
