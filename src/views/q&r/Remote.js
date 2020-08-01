import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import "../../css/maintenance.css";

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "엔지니어 현황"
};

export default function Engineer1() {
  return (
    <div>
      <TopImage data={img_data} />
      <div className="maintenance_container">
        <div className="article">
          ㅁㅁㅁㅁ
        </div>
      </div>
    </div>
  );
}
