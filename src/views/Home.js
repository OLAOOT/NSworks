import React from "react";
import Slider from "../components/sections/Slider";
import "../css/info.css";
import Info1 from "./infos/Info1";
import Info2 from "./infos/Info2";
import Info3 from "./infos/Info3";
import Info4 from "./infos/Info4";
import Info5 from "./infos/Info5";
import "./../css/anima.css";
import $ from "jquery";
window.$ = $;

const heroData = [
  {
    image: "banner1.jpg",
    title: "NSworks",
    subtitle: "",
    description: "Always Do the Best",
    button: null
  },
  {
    image: "banner2.jpg",
    title: "Virtual Integration",
    subtitle: "",
    description: `가상화 서비스를 통해 <br className="mobile" />
    고객의 비즈니스 효율성을 높이며 <br className="pc" /><br className="mobile" />
    자본 비용과 운용 비율의 절감을 <br className="mobile" />
    극대화 할 수 있게 하겠습니다`,
    button: [
      {
        text: "",
        href: "/#info_container3"
      }
    ]
  },
  {
    image: "banner3.jpg",
    title: "Virtual Infrastructure",
    subtitle: "",
    description: `압도적인 시장 점유율과 <br className="mobile" />
      높은 신뢰성 및 안전성을 가진 <br className="pc" /><br className="mobile" />
      VMware 기반 가상화를 구현합니다`,
    button: [
      {
        text: "서버가상화",
        href: "/vm/server"
      },
      {
        text: "데스크탑가상화",
        href: "/vm/desktop"
      },
      {
        text: "스토리지가상화",
        href: "/vm/storage"
      },
      {
        text: "재해복구시스템",
        href: "/vm/DR"
      }
    ]
  },
  {
    image: "banner4.jpg",
    title: "Hardware Infrastructure",
    subtitle: "",
    description: `하드웨어인프라 설명 text 필요`,
    button: [
      {
        text: "서버",
        href: "/hw/server"
      },
      {
        text: "스토리지",
        href: "/hw/storage"
      },
      {
        text: "네트워크",
        href: "/hw/network"
      },
      {
        text: "보안",
        href: "/hw/security"
      }
    ]
  },
  {
    image: "banner5.jpg",
    title: "유지보수",
    subtitle: "",
    description: `유지보수 설명 text 필요`,
    button: [
      {
        text: "엔지니어 현황",
        href: "/mt/engineer"
      },
      {
        text: "유지보수",
        href: "/mt/maintenance"
      }
    ]
  }
];

const Home = () => {
  return (
    <>
      <Slider data={heroData} />
      <Info1 />
      <Info2 />
      <Info3 />
      <Info4 />
      <Info5 />
    </>
  );
};

export default Home;
