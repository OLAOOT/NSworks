import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import tmp1 from "./../../img/tmp1.png";
import tmp2 from "./../../img/tmp2.png";
import tmp3 from "./../../img/tmp4.png";
import tmp4 from "./../../img/tmp3.png";
import tmp5 from "./../../img/tmp5.png";



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
