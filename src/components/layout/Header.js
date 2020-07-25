import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import Logo from './partials/Logo';

import '../../css/header.css';

import $ from 'jquery';
window.$ = $;

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

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
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.addEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const mouseOver = (e) => {
    var event_id = e.target.className.replace('menu', '')    
    $('#subclass'+event_id).show();
  }

  const mouseOut = (e) => {
    var event_id = e.target.className.replace('menu', '')        
    $('#subclass'+event_id).hide();
   
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li onMouseOver={mouseOver}  onMouseOut={mouseOut}>
                      <Link to="/info" onClick={closeMenu} className="menu1">회사소개</Link>
                      <div id="subclass1" className="subclasses" >
                        <Link to="/info" onClick={closeMenu} className="menu1">회사개요</Link>
                        <Link to="/info" onClick={closeMenu} className="menu1">인사말</Link>
                        <Link to="/info" onClick={closeMenu} className="menu1">연혁</Link>
                        <Link to="/info" onClick={closeMenu} className="menu1">찾아오시는 길</Link>
                        <Link to="/info" onClick={closeMenu} className="menu1">contact</Link>
                      </div>
                    </li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu2">
                      <Link to="#0" onClick={closeMenu} className="menu2">가상화인프라</Link>
                      <div id="subclass2" className="subclasses" >
                        <Link to="/info" onClick={closeMenu} className="menu2">서버 가상화</Link>
                        <Link to="/info" onClick={closeMenu} className="menu2">데스크탑 가상화</Link>
                        <Link to="/info" onClick={closeMenu} className="menu2">스토리지 가상화</Link>
                        <Link to="/info" onClick={closeMenu} className="menu2">재해복구시스템(DR)</Link>
                      </div>
                    </li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu3">
                      <Link to="#0" onClick={closeMenu}>하드웨어인프라</Link>
                      <div id="subclass2" className="subclasses" >
                        <Link to="/info" onClick={closeMenu} className="menu3">서버</Link>
                        <Link to="/info" onClick={closeMenu} className="menu3">스토리지</Link>
                        <Link to="/info" onClick={closeMenu} className="menu3">네트워크</Link>
                        <Link to="/info" onClick={closeMenu} className="menu3">보안</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu} id="menu4">기술지원</Link>
                      <div id="subclass2" className="subclasses" >
                        <Link to="/info" onClick={closeMenu} className="menu4">유지보수</Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">기술지원문의</Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">자료실</Link>
                        <Link to="/info" onClick={closeMenu} className="menu4">원격지원</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>원격지원</Link>
                    </li>
                  </ul>
                </div>
                
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;