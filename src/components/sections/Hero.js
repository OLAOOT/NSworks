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

const useStyles = makeStyles(theme => ({
  button: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  title: {
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "44px"
    }
  },
  subtitle: {
    marginBottom: "8px",
    color: "#ffffff",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  description_pc: {
    color: "#ffffff",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  description_mobile: {
    color: "#ffffff",
    marginBottom: "16px",
    fontSize: "16px",
    padding: "0px 10px",
    [theme.breakpoints.up("md")]: {
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
    color: "#ffffff"
  }
})(MuiButton);

const MenuItem = withStyles({
  root: {
    fontFamily: "NanumSquare",
    textAlign: "center",
    color: "#000000"
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseOver = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const breakLinePc = description => {
    const strs = description
      .split(`<br className="mobile" />`)
      .join("")
      .split(`<br className="pc" />`);
    return (
      <p className={classes.description_pc}>
        {strs.map(str => (
          <React.Fragment key={str}>
            {str}
            <br className="pc" />
          </React.Fragment>
        ))}
      </p>
    );
  };

  const breakLineMobile = description => {
    const strs = description
      .split(`<br className="pc" />`)
      .join("")
      .split(`<br className="mobile" />`);
    return (
      <p className={classes.description_mobile}>
        {strs.map(str => (
          <React.Fragment key={str}>
            {str}
            <br className="mobile" />
          </React.Fragment>
        ))}
      </p>
    );
  };

  const scroll_mv = e => {
    //if(window.location.href)
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#info_container3").offset().top - 30
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
                {data.button && (
                  <div>
                    {!data.button[0].text ? (
                      <Link to="/#info_container3">
                        <Button
                          id={data.title}
                          aria-controls="more_menu"
                          aria-haspopup="true"
                          className={classes.button}
                          onClick={scroll_mv}
                        >
                          자세히 보기
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        id={data.title}
                        aria-controls="more_menu"
                        aria-haspopup="true"
                        onMouseOver={handleMouseOver}
                        className={classes.button}
                      >
                        자세히 보기
                      </Button>
                    )}

                    <Menu
                      id="more_menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      onMouseLeave={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                      }}
                    >
                      {data.button.map((v, i) => (
                        <Link to={v.href} key={v.href}>
                          <MenuItem key={i} onClick={handleClose}>
                            {v.text}
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </div>
                )}
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
