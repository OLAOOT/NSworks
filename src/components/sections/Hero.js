import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color"
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div
          className={innerClasses}
          style={{
            paddingTop: 0 + "px"
          }}
        >
          <div className="hero-content">
            <h2 className="mt-0 mb-8">{data.title}</h2>
            <h3 className="mt-0 mb-8">{data.subtitle}</h3>
            <div className="container-xs">
              <p
                className="m-0 mb-32"
                style={{
                  color: "#ffffff",
                  marginBottom: 20 + "px",
                  fontSize: 1 + "rem"
                }}
              >
                {data.description}
              </p>
              <div>
                <ButtonGroup>
                  {data.button ? (
                    <a href="#info1">
                      <Button color="primary" wideMobile to={data.button}>
                        자세히 보기
                      </Button>
                    </a>
                  ) : null}
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
