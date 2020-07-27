import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import Logo from "./partials/Logo";

import "../../css/header.css";

import $ from "jquery";
window.$ = $;

$("#button1").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#elementtoScrollToID").offset().top
    },
    2000
  );
});

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.addEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const closeMenu1 = (e) => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
    console.log(e.target.name)
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#"+e.target.name).offset().top -30
    }, 500);
  };

  const mouseOver = e => {
    var event_id = e.target.className.replace("menu", "");
    $("#subclass" + event_id).show();
  };

  const mouseOver2 = e => {
    var event_target_style = e.target.style;
    $(".subclasses > *").css("background", "#ffffff");
    event_target_style.background = "#D8D8D8";
  };

  const mouseOut = e => {
    var event_id = e.target.className.replace("menu", "");
    $(".subclasses > *").css("background", "#ffffff");
    $("#subclass" + event_id).hide();
  };

  const keyPress = e => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = e => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}>
                      <Link to="/" onClick={closeMenu} className="menu1">
                        회사소개
                      </Link>
                      <div id="subclass1" className="subclasses">
                        <a
                          href="#info_container1"
                          name="info_container1"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu1}
                          className="menu1"
                          id="button1"
                        >
                          회사개요
                        </a>
                        <a
                          href="#info_container2"
                          name="info_container2"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu1}
                          className="menu1"
                        >
                          인사말
                        </a>
                        <a
                          href="#info_container3"
                          name="info_container3"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu1}
                          className="menu1"
                        >
                          연혁
                        </a>
                        <a
                          href="#info_container4"
                          name="info_container4"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu1}
                          className="menu1"
                        >
                          찾아오시는 길
                        </a>
                      </div>
                    </li>
                    <li
                      onMouseOver={mouseOver}
                      onMouseOut={mouseOut}
                      id="menu2"
                    >
                      <Link to="#0" onClick={closeMenu} className="menu2">
                        가상화인프라
                      </Link>
                      <div id="subclass2" className="subclasses">
                        <Link
                          to="/vm/server"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu}
                          className="menu2"
                        >
                          서버 가상화
                        </Link>
                        <Link
                          to="/vm/desktop"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu}
                          className="menu2"
                        >
                          데스크탑 가상화
                        </Link>
                        <Link
                          to="/vm/storage"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu}
                          className="menu2"
                        >
                          스토리지 가상화
                        </Link>
                        <Link
                          to="/vm/DR"
                          onMouseOver={mouseOver2}
                          onClick={closeMenu}
                          className="menu2"
                        >
                          재해복구시스템(DR)
                        </Link>
                      </div>
                    </li>
                    <li
                      onMouseOver={mouseOver}
                      onMouseOut={mouseOut}
                      id="menu3"
                    >
                      <Link to="#0" onClick={closeMenu} className="menu3">
                        하드웨어인프라
                      </Link>
                      <div id="subclass3" className="subclasses">
                        <Link to="/hw/server" onClick={closeMenu} className="menu3">
                          서버
                        </Link>
                        <Link to="/hw/storage" onClick={closeMenu} className="menu3">
                          스토리지
                        </Link>
                        <Link to="/hw/network" onClick={closeMenu} className="menu3">
                          네트워크
                        </Link>
                        <Link to="/hw/security" onClick={closeMenu} className="menu3">
                          보안
                        </Link>
                      </div>
                    </li>
                    <li
                      onMouseOver={mouseOver}
                      onMouseOut={mouseOut}
                      id="menu4"
                    >
                      <Link to="#0" onClick={closeMenu} className="menu4">
                        기술지원
                      </Link>
                      <div id="subclass4" className="subclasses">
                        <Link to="/info" onClick={closeMenu} className="menu4">
                          유지보수
                        </Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">
                          기술지원문의
                        </Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">
                          자료실
                        </Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">
                          원격지원
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>
                        원격지원
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
