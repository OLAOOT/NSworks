import React from "react";
import { Link } from "react-router-dom";
import FeaturesSplit from "../../components/sections/Info/Split_Info";

const Info = () => {
  return (
    <>
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default Info;
