import React from 'react'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopImage from "../../components/sections/TopImage";

import vsan from "./../../img/vsan.png";

import img4 from "./../../img/img_ccai.png";
import "../../css/virtual.css";

const useStyles = makeStyles((theme) => ({
    article_mid: {
      display: 'flex',
      marginTop:100,
      flexWrap: 'wrap',
      justifyContent:'center',

      '& > *': {
        margin: '1%',
        width:'30%',
        minWidth:'250px',
        height: 550,
      },
      '& > *:first-child': {
        margin: '1%',
        width:'95%',
        minWidth:'250px',
        height: 550,
      },
      '& > * > img': {
        position: 'relative',
        left: 0,
        width:'100%',
        maxHeight:'200px'
      },
      '& > * > div': {
        textAlign: 'left',
        padding: '25px 40px 0px',
        fontSize: 19,
        fontWeight: 'bold'
      },
      '& > * > div:last-child': {
        fontWeight: 'normal'
      },
    },
  }));

  const img_data = [
    {
      image: './../../img/slider1.jpg',
      title: "스토리지 가상화",
    }
  ];

export default function Virtualization3() {    
    const classes = useStyles();
    return (
      <div>
        {img_data.map((v,i) => (
          <TopImage data={v} key={i} />
        ))}
        <div className="virtual_container">
            <div className="article">
                <div className="article_top">
                    <div>
                        <span>VMware vSAN</span>
                    </div>
                    <div>
                        소프트웨어 정의 데이터 센터의 핵심 구성요소 : VMware vSAN<br/>
                        vSAN은 중요한 모든 가상화된 워크로드를 위해 VMware vSphere 기반 환경의 간편함을 갖춘 플래시에 최적화된 공유 보안 스토리지를 제공합니다.
                    </div>
                </div>
                <div className="article_mid">
                    <img src={vsan}/>
                    <div>
                        vSAN은 vSphere 기반 고성능 아키텍처로 업계 최고의 하이퍼컨버지드 인프라 솔루션을 구현합니다. 
                        포괄적인 소프트웨어 솔루션 제품군을 통해 간편하게 IT 환경을 확장할 수 있는 대응력을 제공하며, 업계 표준 x86 서버와 구성요소로 실행되므로 
                        TCO가 기존 스토리지 대비 최대 50%절감됩니다.
                    </div>
                </div>
                <div className="article_mid2">
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>소프트웨어 정의 데이터센터를 통한 통합관리</div>
                        <div>
                            vSAN은 고객이 나머지 SDDC 스택과 기본 통합된, 직관적이며 사용이 간편한 인터페이스를 통해 리스크 없이 혁신하고 가치 실현 시간을 단축할 수 있도록 지원합니다
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>업계 최고의 구축 옵션</div>
                        <div>
                            vSAN을 사용하는 고객은 수요가 증가함에 따라 2개에서 64개 노드까지 무중단 확장을 지원하므로 대규모 자본 비용 지출을 줄일 수 있습니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>업계 최초의 기본 보안</div>
                        <div>
                            기존에는 기업이 자체 암호화 드라이브(SED) 또는 타사 보안 소프트웨어와 같은 추가 보안 기능을 구매해야 했지만 
                            vSAN은 업계 최초로 기본 소프트웨어 기반 FIPS 140-2 검증 HCI 미사용 데이터 암호화를 제공합니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>사전 예방적 지원</div>
                        <div>
                            vSAN은 수천 건의 vSAN 구축을 검토하고 지능적 통찰력을 향상하며 문제가 발생하기 전에 알림을 제공하는 알고리즘을 갖춘 지원 통찰력을 통해 사전 예방적 지원을 제공합니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>TCO를 절감하는 데이터 보호</div>
                        <div>
                            vSAN은 분산 RAID 및 캐시 미러링을 활용하며 이레이저 코딩을 사용하여 효율적으로 높은 수준의 보호를 구현하고 
                            활용되는 스토리지 용량을 최대 50%까지 줄일 수 있습니다. vSAN을 사용하면 몇 번의 클릭만으로 쉽고 원활하게 보호할 수 있습니다.
                        </div>
                    </Paper>
                </div>
                <div className="article_bot">
                    <div><span>VSAN Refernece</span></div>
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