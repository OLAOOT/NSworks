import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import vmware from "./../../img/vmware.jpg";
import vmcloud from "./../../img/vmw-cloud.png";
import img4 from "./../../img/img_ccai.png";
import dummyicon from "./../../img/dummyicon.png";

import "../../css/virtual.css";

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "서버 가상화"
};

export default function Virtualization1() {
  return (
    <div>
      <TopImage data={img_data} />
      <div className="virtual_container">
        <div className="article">
          <div className="article_top">
            <div>
              <span>VMware vSphere</span>
            </div>
            <div>
              <div className="highlight">
                업계 최고의 가상화 플랫폼: VMware vSphere
              </div>
              vSphere는 하이브리드 클라우드 전반의 공통 운영 환경에서
              애플리케이션을 실행, 관리, 연결, 보호할 수 있도록 지원합니다.
            </div>
          </div>
          <div className="article_mid">
            <img src={vmware} />
            <div>
              VMware는 사용자가 안심하고 수직 확장 및 수평 확장 애플리케이션을
              가상화할 수 있게 해주며 가용성을 더욱 향상시키고 가상 데이터
              센터를 간소화합니다. 그 결과 데이터 센터 비용을 대폭 절감하고
              시스템 및 애플리케이션 가동 시간을 늘리며 데이터 센터 운영 방식을
              획기적으로 간소화할 수 있습니다.
            </div>
          </div>
          <div className="article_mid2">
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>데이터센터 통합 및 비즈니스 연속성</div>
              <div>
                가상화를 통해 대규모 데이터 센터 운영 및 관리를 간소화 하고
                비즈니스 효율성을 높이며 자본 비용과 운영 비용을 절감할 수
                있습니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>애플리케이션 및 인프라 보안</div>
              <div>
                간편하고 확장 가능한 보안 솔루션을 통해 보안 위협 감지 및 분석의
                정확성을 향상시키고 대응시간을 단축합니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>지능적인 운영 관리 및 자동화</div>
              <div>
                vSphere with Operations Management를 통해 지능적 운영 관리 및
                자동화 기능을 데이터 센터에 추가합니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>빅데이터 가상화</div>
              <div>
                VMware는 기존 애플리케이션에는 물론 빅데이터에도 가장 적합한
                플랫폼입니다.{" "}
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>원격 근무지 및 지사 지원</div>
              <div>
                로컬 IT 직원이 거의 또는 전혀 없는 상태에서도 원격 근무지 및
                지사를 관리합니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>기존 Unix를 가상 Linux로 마이그레이션</div>
              <div>
                성능과 가용성을 개선하고 가상 머신 용량을 늘리며 재해 복구
                기능을 활용할 수 있습니다.
              </div>
            </Paper>
          </div>
          <div className="article_bot">
            <div>
              <span>vSphere Refernece</span>
            </div>
            <div>
              <Paper elevation={3} className="paper">
                비디오 자리
              </Paper>
              <Paper elevation={3} className="paper">
                <img src={vmcloud} />
                <div>dummy text</div>
                <div>dummy text</div>
              </Paper>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
