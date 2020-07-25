import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import img1 from "./../../img/slider1.jpg";
import img2 from "./../../img/slider2.jpg";
import img3 from "./../../img/slider3.jpg";
import img4 from "./../../img/img_ccai.png";
import '../../css/info.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Info2() {    
  return (
      <div className="info_container">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={2000}>
          <div data-src={img1}>
            <p>고객만족을 위한<br/>최고기술</p>
          </div>
          <div data-src={img2}>
            <p>이익실현을 위한<br/>효율경영</p>
          </div>
          <div data-src={img3}>
            <p>동반성장을 위한<br/>파트너쉽</p>
          </div>
        </AutoplaySlider>
        <div className="article">
            
        </div>
      </div>
      );
}
