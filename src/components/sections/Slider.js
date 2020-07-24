import React from "react";
import Image from "../elements/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image
          src={require("./../../assets/images/features-split-image-01.png")}
          alt="Features split 01"
          width={528}
          height={396}
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image
          src={require("./../../assets/images/features-split-image-01.png")}
          alt="Features split 01"
          width={528}
          height={396}
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Image
          src={require("./../../assets/images/features-split-image-01.png")}
          alt="Features split 01"
          width={528}
          height={396}
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
