import React from "react";
import Slider from "../components/sections/Slider";
import "../css/info.css";
import Info1 from "./infos/Info1";
import Info2 from "./infos/Info2";
import Info3 from "./infos/Info3";
import Info4 from "./infos/Info4";

import $ from "jquery";
window.$ = $;

const heroData = [
  {
    image: "./../../img/slider1.jpg",
    title: "NSWorks",
    subtitle: "Always Do the Best",
    description: "dummy text",
    button: "" //링크 넣기. 빈칸으로 남기면 버튼 사라짐
  },
  {
    image: "./../../img/slider2.jpg",
    title: "Virtual Integration",
    subtitle: "",
    description:
      "가상화 서비스를 통해 고객의 비즈니스 효율성을 높이며 자본 비용과 운용 비율의 절감을 극대화 할 수 있게 하겠습니다",
    button: "/href"
  },
  {
    image: "./../../img/slider3.jpg",
    title: "Virtual Infrastructure",
    subtitle: "",
    description:
      "압도적인 시장 점유율과 높은 신뢰성 및 안전성을 가진 VMware 기반 가상화를 구현합니다",
    button: "/href"
  },
  {
    image: "./../../img/slider2.jpg",
    title: "Technical Support",
    subtitle: "",
    description: "전문 엔지니어의 풍부한 경험으로 차별화된 서비스를 지원합니다",
    button: "/href"
  },
  {
    image: "./../../img/slider3.jpg",
    title: "IT Consulting",
    subtitle: "",
    description: "고객의 요구 사항에 맞는 맞춤형 최적 솔루션을 제공하겠습니다",
    button: "/href"
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
    </>
  );
};

export default Home;
