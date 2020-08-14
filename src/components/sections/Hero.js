import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import MuiButton from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import $ from "jquery";
window.$ = $;
const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down("xs")]: {}
  },
  title: {
    marginBottom: "8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "44px"
    },
    color: "#ffffff"
  },
  subtitle: {
    marginBottom: "12px",
    color: "#ffffff",
    fontSize: "26px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
  },
  description_pc: {
    color: "#ffffff",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  description_mobile: {
    color: "#ffffff",
    marginBottom: "16px",
    fontSize: "16px",
    padding: "0px 10px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

const Button = withStyles({
  root: {
    fontFamily: "NanumSquare",
    padding: "5px 30px",
    border: "2px solid #ffffff",
    borderRadius: "30px",
    color: "#ffffff",
    width: "170px"
  }
})(MuiButton);

const MenuItem = withStyles({
  root: {
    fontFamily: "NanumSquare",
    textAlign: "center",
    color: "#000000",
    width: "170px"
  }
})(MuiMenuItem);

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  play,
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

  const classes = useStyles();

  const breakLinePc = (description) => {
    const strs = description
      .split(`<br className="mobile" />`)
      .join("")
      .split(`<br className="pc" />`);
    return (
      <p className={classes.description_pc}>
        {strs.map((str) => (
          <React.Fragment key={str}>
            {str}
            <br className="pc" />
          </React.Fragment>
        ))}
      </p>
    );
  };

  const breakLineMobile = (description) => {
    const strs = description
      .split(`<br className="pc" />`)
      .join("")
      .split(`<br className="mobile" />`);
    return (
      <p className={classes.description_mobile}>
        {strs.map((str) => (
          <React.Fragment key={str}>
            {str}
            <br className="mobile" />
          </React.Fragment>
        ))}
      </p>
    );
  };

  const scroll_mv = (e) => {
    //if(window.location.href)
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#info_container1").offset().top + 350
      },
      500
    );
  };

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
            <h2 className={classes.title}>{data.title}</h2>
            <div className={classes.subtitle}>{data.subtitle}</div>
            <div className="container-xs">
              {breakLinePc(data.description)}
              {breakLineMobile(data.description)}

              <div>
                <div>
                  {data.href ? (
                    <Link to={data.href}>
                      <Button
                        id={data.title}
                        aria-controls="more_menu"
                        aria-haspopup="true"
                        className={classes.button}
                      >
                        자세히 보기
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      id={data.title}
                      aria-controls="more_menu"
                      aria-haspopup="true"
                      className={classes.button}
                      onClick={scroll_mv}
                    >
                      자세히 보기
                    </Button>
                  )}
                </div>
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
