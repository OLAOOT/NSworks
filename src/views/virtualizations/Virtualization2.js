import React from 'react'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopImage from "../../components/sections/TopImage";

import horizon from "./../../img/horizon.png";

import img4 from "./../../img/img_ccai.png";
import "../../css/virtual.css";


  const img_data = [
    {
      image: './../../img/slider1.jpg',
      title: "데스크톱 가상화",
    }
  ];

export default function Virtualization2() {        
    return (
      <div>
        {img_data.map((v,i) => (
          <TopImage data={v} key={i} />
        ))}
        <div className="virtual_container">
            <div className="article">
                <div className="article_top">
                    <div>
                        <span>VMware Horizon</span>
                    </div>
                    <div>
                        단일 플랫폼을 통한 데스크톱 및 애플리케이션 제공 : VMware Horizon<br/>
                        Horizon 7은 최종 사용자에게 가상화된 데스크톱 및 어플리케이션을 제공하여, 조직의 관리 업무를 간소화하고, 비용을 절감하며, 규정이 준수되도록 유지할 수 있습니다
                    </div>
                </div>
                <div className="article_mid">
                    <img src={horizon}/>
                    <div>
                        새로운 모바일 클라우드 환경에서는 기존의 PC 중심 툴을 사용하여 최종 사용자에게 서비스를 제공하고 관리하기가 점점 어렵습니다. 
                        Horizon 7은 IT에 Windows 및 Linux 데스크톱과 애플리케이션을 제공, 보호, 관리하는 한편 비용을 절감하고 최종 사용자가 언제, 어디서나, 모든 기기로 작업할 수 있도록 보장하는 간편한 새 방법을 제공합니다.
                    </div>
                </div>
                <div className="article_mid2">
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>단일 플랫폼을 통해 데스크톱과 애플리케이션 제공</div>
                        <div>
                            단일 VDI 및 애플리케이션 가상화 플랫폼을 통해 가상 또는 원격 데스트톱과 애플리케이션을 프로비저닝하여 관리를 간소화하고 최종 사용자에게 손쉽게 권한을 부여합니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>데이터 보안 유지 및 규정 준수 간소화</div>
                        <div>
                            최종 사용자의컴퓨팅 환경에 맞게 동적으로 적응하는 정책을 통해 엔드유저컴퓨팅 리소스의 제어, 제공 및 보호를 통합합니다. 가상 네트워킹을 활용하여 데어터 센터 인프라 및 워크로드를 동적으로 보호합니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>ROI (투자 수익) 대폭 향상</div>
                        <div>
                            가상스토리지, 가상컴퓨팅 및 가상 네트워킹에 리소스를 동적으로 할당하여 관리를 간소화하고 비용을 절감할 수 있습니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>다양하고 유연한 사용자 환경 지원</div>
                        <div>
                            VMware는 기존 애플리케이션에는 물론 빅데이터에도 가장 적합한 플랫폼입니다.{" "}
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>완벽한 업무 공간 환경 관리</div>
                        <div>
                            긴밀하게 통합된 단일 플랫폼을 통해 사용자 컴퓨팅 리소스에 대한 제어를 통합하고 배포를 자동화하여 보호합니다.
                        </div>
                    </Paper>
                </div>
                <div className="article_bot">
                    <div><span>Horizon Refernece</span></div>
                    <div>
                        <Paper elevation={3} className="paper">
                            비디오 자리
                        </Paper>
                        <Paper elevation={3} className="paper">
                            비디오 자리
                        </Paper>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
      </div>
      );
}
