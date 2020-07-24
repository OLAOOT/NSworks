import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/Info/Split_Info';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import '../css/info.css';

const Info = () => {
  return (
    <>
      <div className="info_container">
      <AwesomeSlider>
        <div data-src="../img/slider1.jpg">
          <p>I want to see what you got.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>The answer is -- Don't think about it.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>Sometimes science is more art than science.</p>
        </div>
        <div data-src="/path/to/image.jpg">
          <p>Love, connection, experience.</p>
        </div>
      </AwesomeSlider>
      </div>
    </>
  )
}

export default Info