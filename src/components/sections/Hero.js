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
  subtitle: {
    marginBottom: "8px",
    color: "#ffffff",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  description: {
    color: "#ffffff",
    marginBottom: 20 + "px",
    fontSize: 1 + "rem"
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
            <div className={classes.subtitle}>{data.subtitle}</div>
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
                {data.button && (
                  <div>
                    {!data.button[0].text ? (
                      <Link to="/VI">
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
                        <Link to={v.href}>
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
