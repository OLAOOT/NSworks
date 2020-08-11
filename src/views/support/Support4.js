import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import "../../css/maintenance.css";

const img_data = {
  image: "banner1.jpg",
  title: "자료실",
  menu1: "기술문의",
  menu2: "자료실"
};

export default function Engineer1() {
  return (
    <div>
      <TopImage data={img_data} />
      <div className="maintenance_container">
        <div className="article">ㅁㄴㅇㅁㄴㅇ</div>
      </div>
    </div>
  );
}
