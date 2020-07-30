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
          <div className="article_top">
            <div>
              <span>엔지니어 및 연구인력</span>
            </div>
          </div>
          <div className="article_mid2">
            <Paper elevation={0} className="paper">
              <img src={tmp1} />
              <div>VIRTUALIZATION</div>
              <div>
                <ul>
                    <li>VMware VCP-DCV 3명</li>
                    <li>VMware VCP-DT 1명</li>
                    <li>Citrix XenDesktop CCA 1명</li>
                    <li>Citrix XenApp 1명</li>
                    <li>Citrix CCSP 2명</li>
                </ul>
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={tmp2} />
              <div>O / S</div>
              <div>
                <ul>
                    <li>MCSE 1명</li>
                    <li>AD(Active Directory) 및 <br/>MS server 전담 엔지니어 2명</li>
                    <li>Linux LPICm Suse CLA 1명</li>
                    <li>Linux master 2명</li>
                </ul>
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={tmp3} />
              <div>HARDWARE</div>
              <div>
                <ul>
                    <li>HP ATP 1명</li>
                    <li>Dell DCSE 1명</li>
                    <li>Cisco CCNA 1명</li>
                    <li>Cisco CCNP 1명</li>
                    <li>Alcatel Lucent 1명</li>
                </ul>
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={tmp4} />
              <div>DATABASE</div>
              <div>
                <ul>
                    <li>OCP 1명</li>
                    <li>OCNA 1명</li>
                    <li>MS SQL 엔지니어 1명</li>
                    <li>공학박사 (네트워크 보안)</li>
                    <li>이학박사</li>
                    <li>정보처리기사 외 다수</li>
                </ul>
              </div>
            </Paper>
          </div>
          <div className="article_top">
            <div>
              <span>파트너십</span>
            </div>
          </div>
          <div className="article_mid">
            <img src={tmp5} />
            <div>
                <ul>
                    <li>VMware Enterprise 파트너</li>
                    <li>HP Industrial Server Storage 공인서비스 센터</li>
                    <li>HP Server, Storage, Network 파트너</li>
                    <li>Dell Server, Storage, Network 서비스 파트너</li>
                    <li>Cisco 파트너</li>
                    <li>Alcatel Lucent 파트너</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
