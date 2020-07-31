import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";

import srm from "./../../img/srm.png";
import vmcloud from "./../../img/vmw-cloud.png";
import img4 from "./../../img/img_ccai.png";
import dummyicon from "./../../img/logo.png";
import "../../css/virtual.css";

const img_data = [
  {
    image: "./../../img/slider1.jpg",
    title: "재해복구시스템(DR)"
  }
];

export default function Virtualization4() {
  return (
    <div>
      {img_data.map((v, i) => (
        <TopImage data={v} key={i} />
      ))}
      <div className="virtual_container">
        <div className="article">
          <div className="article_top">
            <div>
              <span>VMware SRM</span>
            </div>
            <div>
              <div className="highlight">
                재해 복구 소프트웨어 : VMware Site Recovery Manager
                <br />
              </div>
              정책 기반 관리, 무중단 테스트 및 자동화된 조정으로 프라이빗
              클라우드 환경 내 각 사이트 간에 애플리케이션 가용성과 모빌리티를
              구현하는 업계 최고의 재해 복구 소프트웨어입니다.
            </div>
          </div>
          <div className="article_mid">
            <img src={srm} />
            <div>
              VMware Site Recovery Manager는 VMware vSphere® 환경에서 모든
              애플리케이션을 관리하기 위해 확장할 수 있으며, 소프트웨어 정의
              데이터 센터(SDDC) 아키텍처를 활용하여 VMware NSX(네트워크 가상화),
              VMware vSAN(하이퍼 컨버지드 인프라를 지원하는 소프트웨어)과 같은
              다른 VMware 솔루션과 통합할 수 있습니다.
            </div>
          </div>
          <div className="article_mid2">
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>빠르고 안정적인 IT 재해 복구 제공</div>
              <div>
                수시로 무중단 테스트를 수행하여 IT 재해 복구 소프트웨어의
                예측가능성 및 규정 준수를 보장할 수 있습니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>다운타임 없는 애플리케이션 모빌리티 제공</div>
              <div>
                재해 복구 계획을 사용해서 메트로 범위로 분산되어 있는 사이트
                간에 대규모의 가상 머신을 실시간으로 이동함으로써 다운타임 없이
                vSphere의 vCenter 간 vMotion 운영을 조정할 수 있습니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>간편한 정책기반 관리 사용</div>
              <div>
                vSphere Web Client에서 관리되는 중앙 집중식 복구 계획을 사용하여
                수천 대의 가상머신을 손쉽게 보호할 수 있습니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>사전 예방적 지원</div>
              <div>
                vSAN은 수천 건의 vSAN 구축을 검토하고 지능적 통찰력을 향상하며
                문제가 발생하기 전에 알림을 제공하는 알고리즘을 갖춘 지원
                통찰력을 통해 사전 예방적 지원을 제공합니다.
              </div>
            </Paper>
            <Paper elevation={0} className="paper">
              <img src={dummyicon} />
              <div>TCO를 절감하는 데이터 보호</div>
              <div>
                vSAN은 분산 RAID 및 캐시 미러링을 활용하며 이레이저 코딩을
                사용하여 효율적으로 높은 수준의 보호를 구현하고 활용되는
                스토리지 용량을 최대 50%까지 줄일 수 있습니다. vSAN을 사용하면
                몇 번의 클릭만으로 쉽고 원활하게 보호할 수 있습니다.
              </div>
            </Paper>
          </div>
          <div className="article_bot">
            <div>
              <span>SRM Refernece</span>
            </div>
            <div>
              <Paper elevation={3} className="paper">
                비디오 자리
              </Paper>
              <Paper elevation={3} className="paper">
                <img src={vmcloud} />
                <div>업계 최고의 가상화 플랫폼</div>
                <div>NSworks 전문 엔지니어와 상담하십시요. </div>
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
