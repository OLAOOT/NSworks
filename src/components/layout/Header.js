import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "./../../InfoContext";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import "../../css/header.css";
import logo from "./../../img/logo.png";
import $ from "jquery";
window.$ = $;

const drawerWidth = 240;
const Button = withStyles({
  root: {
    fontFamily: "NanumSquare",
    color: "#666666"
  }
})(MuiButton);
const Menu = withStyles({
  root: {
    marginTop: "1000px",
    paddingTop: "1000px"
  }
})(MuiMenu);
const MenuItem = withStyles({
  root: {
    fontFamily: "NanumSquare",
    textAlign: "center",
    color: "#000000",
    width: "170px"
  }
})(MuiMenuItem);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 9999,
    height: "64px",
    fontFamily: "NanumSquare"
  },
  menu1: {
    width: "95%",
    paddingBottom: "15px",
    borderBottom: "1px solid rgba(0, 0, 0, .075)",
    fontFamily: "NanumSquare"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  // appBar: {
  //   [theme.breakpoints.up("md")]: {
  //     width: `100%`,
  //     marginLeft: drawerWidth,
  //     zIndex: 9999
  //   },
  //   height: "64px",
  //   background: "#fafafa",
  //   boxShadow: "0px 0px 0px 0px !important"
  // },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    position: "absolute",
    right: 0
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  txt_deco_none: {
    color: "#000000 !important"
  },
  txt_deco_none2: {
    color: "#000000 !important"
  },
  heading: {
    fontWeight: 700
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: "none",
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -10,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    fontWeight: 700,
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

const Typography = withStyles((theme) => ({
  root: {
    // width: "95%",
    // paddingBottom: 15,
    // borderBottom: "1px solid rgba(0, 0, 0, .075)",
    fontFamily: "NanumSquare"
  }
}))(MuiTypography);

function Header(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  //console.log(props.current_link)

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDrawerToggle = (open) => () => {
    setExpanded(false);
    setMobileOpen(open);
  };

  const handleItemClick = () => {
    setExpanded(false);
    setMobileOpen(false);
  };
  var isOpen = true;
  const mouseOver = (e) => {
    isOpen = false;
    //console.log('over')
    $(".subclasses_wrap").animate({ opacity: "1" }, 1);
    $(".subclasses_wrap").animate({ height: "280px" }, 500);
  };

  const mouseOut = (e) => {
    isOpen = true;
    //console.log('out')
    $(".subclasses_wrap").animate({ height: "0px", opacity: "0" }, 200);
  };

  const scroll_mv = (e) => {
    //console.log($(this).parent().attr('name'))
    if (document.location.pathname !== "/") {
      document.location.href = "/#" + e.target.name;
    }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + e.target.name).offset().top - 30
      },
      500
    );
  };

  $("#div_laypopup > span").click(() => {
    var checked = $("input:checkbox[id='close']").is(":checked");
    if (checked) setCookieMobile("todayCookies", "done", 1);
    $("#div_laypopup").hide();
  });

  const setCookieMobile = (name, value, expiredays) => {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie =
      name +
      "=" +
      escape(value) +
      "; path=/; expires=" +
      todayDate.toGMTString() +
      ";";
  };

  $(document).ready(function () {
    var cookiedata = document.cookie;
    if (!cookiedata && document.location.pathname === "/") {
      $("#div_laypopup").show();
    } else {
      $("#div_laypopup").hide();
    }
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const scrollPosition = useContext(InfoContext);

  const onClickInfo = (pos) => () => {
    scrollPosition.setPosition(pos);
  };

  return (
    <div className={classes.root}>
      <div className="header" onMouseLeave={mouseOut} id="header0">
        <div className="subclasses_wrap">
          <div className="subclasses">
            <div id="subclass1">
              <Link
                to="/"
                name="info_container1"
                onClick={onClickInfo("info_container1")}
                className="menu1"
              >
                회사개요
              </Link>
              <Link
                to="/"
                name="info_container2"
                onClick={onClickInfo("info_container2")}
                className="menu1"
              >
                인사말
              </Link>
              <Link
                to="/"
                name="info_container3"
                onClick={onClickInfo("info_container3")}
                className="menu1"
              >
                사업영역
              </Link>
              <Link
                to="/"
                name="info_container4"
                onClick={onClickInfo("info_container4")}
                className="menu1"
              >
                연혁
              </Link>
              <Link
                to="/"
                name="info_container5"
                onClick={onClickInfo("info_container5")}
                className="menu1"
              >
                찾아오시는 길
              </Link>
            </div>
            <div id="subclass2">
              <Link to="/vm/server" className="menu2">
                서버 가상화
              </Link>
              <Link to="/vm/desktop" className="menu2">
                데스크톱 가상화
              </Link>
              <Link to="/vm/storage" className="menu2">
                스토리지 가상화
              </Link>
              <Link to="/vm/DR" className="menu2">
                재해복구시스템
              </Link>
            </div>
            <div id="subclass3">
              <Link to="/hw/server" className="menu3">
                서버
              </Link>
              <Link to="/hw/storage" className="menu3">
                스토리지
              </Link>
              <Link to="/hw/network" className="menu3">
                네트워크
              </Link>
              <Link to="/hw/security" className="menu3">
                보안
              </Link>
            </div>
            <div id="subclass4">
              <Link to="/mt/engineer" className="menu4">
                엔지니어 현황
              </Link>
              <Link to="/mt/maintenance" className="menu4">
                유지보수
              </Link>
              <Link to="/mt/question" className="menu4">
                기술지원문의
              </Link>
              <Link to="/mt/reference" className="menu4">
                자료실
              </Link>
              <Link to="/remote" className="menu4">
                원격지원
              </Link>
            </div>
            <div id="subclass5">
              <Link to="/remote" className="menu4">
                원격지원
              </Link>
            </div>
            <div id="subclass6"></div>
          </div>
        </div>
        <div className="tool">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle(true)}
            className={classes.menuButton}
            id="menuBtn"
          >
            <MenuIcon />
          </IconButton>
          <div variant="h6" noWrap>
            <Link
              to="/"
              className={classes.txt_deco_none2}
              onClick={onClickInfo("header0")}
            >
              <img src={logo} />
            </Link>
          </div>
          <div className="menus">
            <div id="menu1" onMouseEnter={mouseOver}>
              <Link to="/" className="menu1" onClick={onClickInfo("header0")}>
                회사소개
              </Link>
            </div>
            <div id="menu2" onMouseEnter={mouseOver}>
              <Link to="/vm/server" className="menu2">
                가상화인프라
              </Link>
            </div>
            <div id="menu3" onMouseEnter={mouseOver}>
              <Link to="/hw/server" className="menu3">
                하드웨어인프라
              </Link>
            </div>
            <div id="menu4" onMouseEnter={mouseOver}>
              <Link to="/mt/maintenance" className="menu4">
                기술지원
              </Link>
            </div>
            <div id="menu5" onMouseEnter={mouseOver}>
              <Link to="/remote" className="menu5">
                원격지원
              </Link>
            </div>
            <div id="menu6" onMouseEnter={mouseOver}>
              <Link to="/admin/login" className="menu6">
                직원전용
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <List>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleAccordionChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>회사소개</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container1")}
                      >
                        <ListItem
                          button
                          key="회사개요"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>회사개요</Typography>}
                            id="m_info_container1"
                            class="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container2")}
                      >
                        <ListItem button key="인사말" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>인사말</Typography>}
                            id="m_info_container2"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container3")}
                      >
                        <ListItem
                          button
                          key="사업영역"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>사업영역</Typography>}
                            id="m_info_container3"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container4")}
                      >
                        <ListItem button key="연혁" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>연혁</Typography>}
                            id="m_info_container4"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container5")}
                      >
                        <ListItem
                          button
                          key="찾아오시는길"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>찾아오시는길</Typography>}
                            id="m_info_container5"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleAccordionChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>가상화인프라</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/vm/server" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="서버가상화"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>서버가상화</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/desktop" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="데스크톱가상화"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>데스크톱가상화</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/storage" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="스토리지가상화"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>스토리지가상화</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/DR" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="재해복구시스템"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>재해복구시스템</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleAccordionChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>하드웨어인프라</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/hw/server" className={classes.txt_deco_none}>
                        <ListItem button key="서버" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>서버</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/storage" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="스토리지"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>스토리지</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/network" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="네트워크"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>네트워크</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/security" className={classes.txt_deco_none}>
                        <ListItem button key="보안" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>보안</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleAccordionChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>기술문의</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/mt/engineer" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="엔지니어 현황"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>엔지니어 현황</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mt/maintenance"
                        className={classes.txt_deco_none}
                      >
                        <ListItem
                          button
                          key="유지보수"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>유지보수</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/mt/question" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="기술지원문의"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>기술지원문의</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mt/reference"
                        className={classes.txt_deco_none}
                      >
                        <ListItem button key="자료실" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>자료실</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/remote" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="원격지원"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>원격지원</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleAccordionChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>원격지원</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/remote" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="원격지원"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>원격지원</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleAccordionChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>직원전용</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="직원전용"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>직원전용</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default Header;
