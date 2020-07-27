import React from 'react'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopImage from "../../components/sections/TopImage";

import hp1 from "./../../img/hp20_01.jpg";
import hp2 from "./../../img/hp20_211.jpg";
import hp3 from "./../../img/hp20_31.jpg";
import hp4 from "./../../img/hp20_32.jpg"
import hp5 from "./../../img/hp20_41.jpg";
import hp6 from "./../../img/hp20_42.jpg"
import dell1 from "./../../img/dell20_01.jpg"
import dell2 from "./../../img/dell20_11.jpg"
import dell3 from "./../../img/dell20_12.jpg"
import dell4 from "./../../img/dell20_13.jpg"
import syn1 from "./../../img/synology01_01.jpg"
import syn2 from "./../../img/synology02_01.jpg"
import syn3 from "./../../img/synology02_02.jpg"
import img4 from "./../../img/img_ccai.png";

import "../../css/hardware.css";



  const img_data = [
    {
      image: './../../img/slider1.jpg',
      title: "스토리지",
    }
  ];

export default function Hardware2() {    
    
    return (
      <div>
        {img_data.map((v,i) => (
          <TopImage data={v} key={i} />
        ))}
        <div className="hardware_container">
            <div className="article">
                <div className="article_top">
                    <div>
                        <span>HPE Storage</span>
                    </div>
                    <div>
                        HPE 스토리지의 비전<br/>
                        HPE의 New Style of IT의 새로운 스토리지 아키텍처
                    </div>
                </div>
                <div className="article_mid">
                    <img src={hp1}/>
                    <img src={hp2}/>
                    <div>
                        HPE는 일찍이 데이터의 폭증을 대처할 수 있는 Polymorphic Simplicity의 비전을 담은 스토리지 아키텍처를 준비해왔습니다
                    </div>
                </div>
                <div className="article_top">
                    <div>
                        <span>HPE 스토리지 포트폴리오</span>
                    </div>
                    <div>
                    HPE는 고객의 다양한 스토리지 환경에 최적화된 Total Solution을 제공합니다. 
                    <br/>소규모 환경에 적합한 Entry storage부터 미션 크리티컬한 업무를 위한 고효율, 고성능 스토리지 라인업, 효과적인 백업과 복구를 위한 Disk backup, Tape backup 제품군, 파일 공유 환경을 위한 NAS Storage 제품군 그리고 Software-defined Storage 제품군 등 고객의 어떠한 IT환경도 충족 가능한 다양한 포트폴리오를 보유하고 있습니다.
                    </div>
                </div>
                <div className="article_mid">
                    <img src={hp3} className="img_50_2"/>
                    <img src={hp4} className="img_50_2"/>
                    <img src={hp5} className="img_50_2"/>
                    <img src={hp6} className="img_50_2"/>
                </div>
                <div class="pdf_wrap">
                    <p>
                        <a href="http://nsworks.ns7.biz/data_sheet/HPE_Storage_Family_Brochure.pdf" target="_blank" className="PDF_link">
                            HPE Storage DataSheet Download
                        </a>
                    </p>
			  </div>
                <div className="article_top">
                    <div>
                        <span>Dell EMC Storage</span>
                    </div>
                    <div>
                        탁월한 가치를 제공하는 플래시 스토리지<br/>
                        인프라스트럭처를 현대화하는 과정에서 플래시는 디지털 비즈니스 성과를 실현할 수 있도록 효율성을 높이고 비용을 절감하는 기반 스토리지 미디어로 활용됩니다. 
                        하지만 다른 경쟁업체와 Dell EMC를 차별화하는 요소는 Dell EMC의 아키텍처와 소프트웨어입니다. 
                        즉, Dell EMC 솔루션의 가치는 인텔® 제온® 프로세서를 기반으로 하며 시장에서 가장 포괄적인 올 플래시 포트폴리오로 새로운 차원의 성공을 실현하도록 고객을 지원하는 데 있습니다. 
                        어떤 스토리지 기업도 Dell EMC처럼 비즈니스 혁신을 위한 다양한 제품과 솔루션을 제공하지 못합니다. Dell EMC는 전체 스토리지 포트폴리오에서 극대화된 효율성으로 투자 가치를 보장합니다.
                    </div>
                </div>
                <div className="article_mid">
                    <img src={dell1}/>
                </div>
                <div className="article_mid2">
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>성능</div>
                        <div>
                            3x 빠른 속도1, 최소의 지연 시간, 1밀리초 미만의 응답 시간2을 바탕으로 미션 크리티컬 애플리케이션의 무중단 가용성, 신속한 변화 대응 능력, 
                            일관되고 예측 가능한 성능을 보장할 수 있습니다. 워크로드 통합을 실현하고 단일 워크로드 분산 문제를 해소할 수 있습니다
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper">
                        <img src={img4} />
                        <div>가용성</div>
                        <div>
                            최대 99.9999%의 무중단 가용성을 제공합니다.3 재해 복구, 무중단 업무 운영 및 데이터 보호 기능이 결합된 세계 최고 수준의 솔루션을 사용할 수 있습니다
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper"> 
                        <img src={img4} />
                        <div>확장성</div>
                        <div>
                            엔트리 레벨에서 엔터프라이즈 솔루션에 이르는 다양한 구성이 가능하므로, 소규모로 구축한 후 성능 저하 없이 대규모로 확장할 수 있습니다. 
                            단일 클러스터에서 92.4PB까지용량을 확장할 수 있습니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper"> 
                        <img src={img4} />
                        <div>TCO 절감 및 신속한 ROI 실현</div>
                        <div>
                            간편한 구축, 인라인 데이터 압축, 관리 복잡성 감소, 전력/상면/냉각 요구 사항 감소로 스토리지 관리 비용이 1/5.8 수준으로 줄어드는 등 
                            3년간 최대 80%의 비용 절감 효과를 실현할 수 있습니다. 기존 디스크 기반 스토리지 시스템보다 6배 많은 데이터를 저장할 수 있습니다.
                        </div>
                    </Paper>
                    <Paper elevation={3} className="paper"> 
                        <img src={img4} />
                        <div>컨버지드 인프라스트럭처</div>
                        <div>
                            완벽하게 최적화된 올 플래시 플랫폼을 즉각적으로 구축하여 핵심 비즈니스 애플리케이션과 서비스를 실행할 수 있습니다.
                        </div>
                    </Paper>
                </div>
                <div className="article_mid">
                    <img src={dell2} className="img_33"/>
                    <img src={dell3} className="img_33"/>
                    <img src={dell4} className="img_33"/>
                </div>
                <div class="pdf_wrap">
                    <p>
                        <a href="http://nsworks.ns7.biz/data_sheet/EMC_h15054-modernize-with-all-flash.pdf" target="_blank" className="PDF_link">
                            Dell Storage DataSheet Download
                        </a>
                    </p>
			  </div>
            <div className="article_top">
                <div>
                    <span>Synology Storage(NAS)(!!이부분은 디자인 교체 예정!!)</span>
                </div> 
            </div>
            <div className="article_mid">
                <img src={syn1}/>
                <div>
                    Synology RackStation RS1219+<br/>
                    Synology RackStation RS1219+는 AES-NI 하드웨어 암호화 엔진을 탑재한 쿼드 코어 프로세서가 지원하는 2U 8베이 랙마운트 NAS입니다. 
                    이중 SSD 캐시 드라이브용 M.2 SSD 어댑터 카드(옵션)로 저장소 성능이 강화된 RS1219+는 데이터 관리를 간소화하고 중요 자산을 보호하며 
                    다양한 플랫폼에서 파일을 공유하는 중앙 집중 파일 서버입니다. Synology RS1219+에는 Synology 3년 제한 보증이 제공됩니다.
                </div>
            </div>
            <div className="article_mid2" id="paper_wide">
                <Paper elevation={3} className="paper">
                    <div id="noImg">
                        <div>소형 2U 저장소 서버</div>
                        <div>
                            Synology RS1219+는 고성능 및 확장 가능한 용량을 지원하는 8베이 네트워크 연결 형 저장소 솔루션입니다. RX418 확장 유닛 한 대를 연결하면 RS1219+는 드라이브 를 최대 12개까지 지원하므로, 필요에 따라 간편하게 확장할 수 있습니다. RS1219+ 와 RX418 모두 깊이가 12인치이므로, 두 장치를 2포스트 랙에 장착할 수 있습니다. 10GbE 애드온 카드 외에 PCle 슬롯 또한 SSD 캐시로 작동하는 M.2 SATA SSD 어댑 터 카드(옵션)를 지원하므로, 3.5" 드라이브 베이를 사용하지 않고도 저장소 성능 이 크게 향상됩니다.
                            RS1219+에는 쿼드 코어 프로세서와 2GB DDR3 메모리(16GB까지 확장 가능)가 탑 재되어 있습니다. 10GbE 네트워크 환경에서 RS1219+는 1,310 MB/s 이상의 읽기와 470 MB/s 이상의 쓰기라는 뛰어난 순차 처리량 성능을 제공합니다.
                        </div>
                    </div>
                </Paper>
                <Paper elevation={3} className="paper">
                    <div id="noImg">
                        <div>엔터프라이즈급 응용 프로그램</div>
                        <div>
                            혁신적인 Synology DiskStation Manager(DSM)가 지원하는 RS1219+는 소기업 또 는 성장하는 기업용으로 특별히 설계된 응용 프로그램과 기능을 모두 갖추고 있습니다.<br/>

                            . Windows® AD 및 LDAP를 지원하므로, 기존 비즈니스 디렉토리 서비스와 손쉽 게 통합될 수 있습니다.<br/>
                            . Windows ACL을 지원하므로, 세부적인 액세스 제어와 효율적인 권한 설정이 가능합니다. 이를 활용하여 RS1219+를 기존 인프라에 원활하게 적용할 수 있 습니다.<br/>
                            . 암호화된 FTP 서버와 웹 기반 파일 탐색기, Synology File Station으로 인터넷 파일 액세스가 더욱 간소화되었습니다. HTTPS, 방화벽 및 IP 자동 차단을 지원 하므로, 인터넷을 통해 공유된 파일이 높은 수준의 보안으로 보호됩니다.<br/>
                            . 응용 프로그램 권한은 각각의 개인 계정, 사용자 그룹 또는 IP 주소를 기반으로 응용 프로그램 및 패키지로의 액세스를 제어합니다.<br/>
                        </div>
                    </div>
                </Paper>
            </div>
            <div className="article_mid">
                <img src={syn2} className="img_50_2"/>
                <img src={syn3} className="img_50_2"/>
            </div>
            <div className="article_top">
                &nbsp;
            </div>
            <div className="article_mid2" id="paper_wide">
                <Paper elevation={3} className="paper">
                    <div id="noImg">
                        <div>Btrfs: 차세대 저장소 효율성</div>
                        <div>
                            RS1219+는 Btrfs 파일 시스템을 도입하여, 가장 진보한 저장소 기술을 제공함으로 써 현대 비즈니스의 관리 필요성을 충족합니다.<br/>

                            . 사용자 지정 가능한 백업 스케줄 기능이 있는 고급 스냅샷 기술을 사용하면 많 은 저장소 용량과 시스템 리소스를 차지하지 않고도 공유 폴더 복사본을 최대 1,024개까지 최소 5분 간격으로 백업할 수 있습니다.<br/>
                            . 파일 또는 폴더 수준 데이터 복원은 특정 파일 또는 폴더만 복원하려는 사용자 에게 편의성과 시간 절약이라는 이점을 제공합니다.<br/>
                            . 유연한 공유 폴더와 사용자 할당량 시스템은 모든 사용자 계정과 공유 폴더의 할당량을 포괄적으로 제어합니다.<br/>
                            . 기본 제공되는 데이터 무결성 검사 기능은 데이터와 메타데이터 체크섬을 사 용하여 데이터 및 파일 시스템 손상을 감지하고 안정성을 전체적으로 향상시 킵니다.<br/>
                            . 파일 자동 복구: Btrfs 파일 시스템은 미러링된 메타데이터를 사용하여 손상된 파일을 자동으로 감지하고, RAID1, 5, 6 및 10을 포함한 지원되는 RAID 볼륨을 사용하여 손상된 데이터를 복구할 수 있습니다.<br/>
                            . IT 관리자를 위해 고급 LUN과 더불어 매우 빠른 스냅샷 생성, 복원 및 복제를 제 공하는 최첨단 iSCSI 서비스를 제공합니다.<br/>
                        </div>
                    </div>
                </Paper>
                <Paper elevation={3} className="paper">
                    <div id="noImg">
                        <div>최강의 백업 솔루션</div>
                        <div>
                            RS1219+는 다양한 백업 응용 프로그램을 통합하고 있어 직관적인 사용자 인터페 이스와 우수한 성능의 저장소 기술을 통해 모든 장치의 중요 데이터를 보호합니다.<br/>

                            . 데스크톱 백업: Cloud Station Backup은 PC, Mac 또는 기타 데스크톱 장치를 보호합니다. 또한 RS1219+는 Time Machine과 호환되므로, 간편하게 사용 중인 Mac을 Synology NAS로 백업할 수 있습니다.<br/>
                            . NAS 백업: Hyper Backup은 데이터를 로컬 공유 폴더, 외부 장치, 다른 Synology NAS, rsync 서버 또는 공용 클라우드 서비스 또는 C2 Backup에 포괄적으로 백 업하므로, 데이터 안전성이 강화됩니다.<br/>
                            . 서버 백업: Active Backup for Server는 에이전트 없는 백업 솔루션을 제공하 고 SMB와 rsync를 통해 Windows 및 Linux 서버의 데이터를 중앙 집중화하므로, 배치 및 관리 비용이 효과적으로 최소화됩니다.<br/>
                            . SaaS 백업: Active Backup for Oce 365/G Suite는 중앙 집중 대시보드가 있는 공용 클라우드용 온프레미스 백업 솔루션입니다. 단일 인스턴싱과 블록 수준 중복 제거 기술을 통해 저장소 효율성이 최적화됩니다.그램 권한은 각각의 개인 계정, 사용자 그룹 또는 IP 주소를 기반으로 응용 프로그램 및 패키지로의 액세스를 제어합니다.<br/>
                        </div>
                    </div>
                </Paper>
                <Paper elevation={3} className="paper">
                    <div id="noImg">
                        <div>간편한 가상화 환경</div>
                        <div>
                            Synology의 Virtual Machine Manager를 사용하면 NAS 용량을 무제한으로 확장 할 수 있습니다. Windows, Linux 및 Virtual DSM을 포함한 다양한 가상 컴퓨터를 설치 및 실행하여 샌드박스 환경에서 소프트웨어 새 버전을 테스트하고, 고객 컴 퓨터를 격리하고, 하드웨어 배포 및 유지보수 비용을 절약하면서 RS1219+ 유연성 을 향상시킬 수 있습니다.

                            Synology iSCSI 저장소는 대부분의 가상화 솔루션을 완벽하게 지원하므로, 간단 한 관리 인터페이스를 통해 업무 효율성이 증가합니다. VMware vSphere™ 6.5와 VAAI가 통합되어 있어, 저장소 작동 부담이 감소하고 컴퓨팅 효율성이 최적화됩 니다. Windows ODX(Offloaded Data Transfer)는 데이터 전송과 마이그레이션 속 도를 향상시키고, OpenStack Cinder는 Synology NAS를 블록 기반 저장소 구성 요 소로 변환시킵니다.
                        </div>
                    </div>
                </Paper>
            </div>
            <div class="pdf_wrap">
                <p>
                    <a href="http://nsworks.ns7.biz/data_sheet/NAS_Synology_RS1219.pdf" target="_blank" className="PDF_link">
                        Synology NAS DataSheet Download
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
      );
}