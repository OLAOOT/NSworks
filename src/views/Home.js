import React, { useEffect, useContext } from "react";
import Slider from "../components/sections/Slider";
import "../css/info.css";
import Info1 from "./infos/Info1";
import Info2 from "./infos/Info2";
import Info3 from "./infos/Info3";
import Info4 from "./infos/Info4";
import Info5 from "./infos/Info5";
import InfoContext from "./../InfoContext";
import "./../css/anima.css";
import $ from "jquery";
window.$ = $;

const heroData = [
  {
    image: "banner1.jpg",
    title: "NSworks",
    subtitle: "Virtualizing Your Information Infrastructure",
    description: `가상화 서비스를 통해 <br className="mobile" />
    고객의 비즈니스 효율성을 높이며 <br className="pc" /><br className="mobile" />
    자본 비용과 운용 비율의 절감을 <br className="mobile" />
    극대화 할 수 있게 하겠습니다`,
    href: ""
  },
  {
    image: "banner3.jpg",
    title: "Virtual Infrastructure",
    subtitle: "",
    description: `압도적인 시장 점유율과 <br className="mobile" />
      높은 신뢰성 및 안전성을 가진 <br className="pc" /><br className="mobile" />
      VMware 기반 가상화를 구현합니다`,
    href: "/vm/server"
  },
  {
    image: "banner4.jpg",
    title: "Hardware Infrastructure",
    subtitle: "",
    description: `가장 유연하고, 안정적이며, 최적화된 성능을<br className="mobile" /> 
    낼 수 있는 제품군으로<br className="pc" />
     가상화 및 클라우드<br className="mobile" /> 컴퓨팅의 솔루션을 제공합니다`,
    href: "/hw/server"
  },
  {
    image: "banner5.jpg",
    title: "Technical Support",
    subtitle: "",
    description: `전문 엔지니어의 풍부한 경험으로<br className="mobile" />
     차별화된 서비스를 지원합니다`,
    href: "/mt/maintenance"
  },
  {
    image: "banner2.jpg",
    title: "IT Consulting",
    subtitle: "",
    description: `고객의 요구 사항에 맞는<br className="mobile" />
     맞춤형 최적 솔루션을 제공하겠습니다`,
    href: "/mt/question"
  }
];

const Home = () => {
  const scrollPosition = useContext(InfoContext);
  useEffect(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + scrollPosition.position).offset().top - 30
      },
      500
    );
  });

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
