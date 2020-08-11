import React from "react";
import { Link } from "react-router-dom";
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
    [theme.breakpoints.up("md")]: {
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
    width: "95%",
    paddingBottom: 15,
    borderBottom: "1px solid rgba(0, 0, 0, .075)",
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
  var isOpen = true
  const mouseOver = (e) => { 
    isOpen = false   
    //console.log('over')
    $(".subclasses_wrap").show()
    $(".subclasses_wrap").animate({ height : "280px" },500)
  };

  const mouseOut = (e) => {
    isOpen = true
    //console.log('out')
    $(".subclasses_wrap").animate({ height : "0px" },500)    
    setTimeout(function() { 
      if(isOpen)
        $(".subclasses_wrap").hide() 
    }, 500);
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

  $(".m_info_container").click(function () {
    var id = $(this).attr("id").replace("m_", "");
    if (document.location.pathname !== "/") {
      document.location.href = "/#" + id;
    }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + id).offset().top - 30
      },
      500
    );
  });

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleAccordionChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>회사소개</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/" className={classes.txt_deco_none}>
                <ListItem button key="회사개요" onClick={handleItemClick}>
                  <ListItemText
                    primary="회사개요"
                    id="m_info_container1"
                    class="m_info_container"
                  />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/" className={classes.txt_deco_none}>
                <ListItem button key="인사말" onClick={handleItemClick}>
                  <ListItemText
                    primary="인사말"
                    id="m_info_container2"
                    class="m_info_container"
                  />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/" className={classes.txt_deco_none}>
                <ListItem button key="사업영역" onClick={handleItemClick}>
                  <ListItemText
                    primary="사업영역"
                    id="m_info_container3"
                    class="m_info_container"
                  />
                </ListItem>
              </Link>
            </div>

            <div>
              <Link to="/" className={classes.txt_deco_none}>
                <ListItem button key="연혁" onClick={handleItemClick}>
                  <ListItemText
                    primary="연혁"
                    id="m_info_container4"
                    class="m_info_container"
                  />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/" className={classes.txt_deco_none}>
                <ListItem button key="찾아오시는길" onClick={handleItemClick}>
                  <ListItemText
                    primary="찾아오시는길"
                    id="m_info_container5"
                    class="m_info_container"
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
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>가상화인프라</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/vm/server" className={classes.txt_deco_none}>
                <ListItem button key="서버가상화" onClick={handleItemClick}>
                  <ListItemText primary="서버가상화" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/vm/desktop" className={classes.txt_deco_none}>
                <ListItem button key="데스크톱가상화" onClick={handleItemClick}>
                  <ListItemText primary="데스크톱가상화" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/vm/storage" className={classes.txt_deco_none}>
                <ListItem button key="스토리지가상화" onClick={handleItemClick}>
                  <ListItemText primary="스토리지가상화" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/vm/DR" className={classes.txt_deco_none}>
                <ListItem button key="재해복구시스템" onClick={handleItemClick}>
                  <ListItemText primary="재해복구시스템" />
                </ListItem>
              </Link>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleAccordionChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>하드웨어인프라</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/hw/server" className={classes.txt_deco_none}>
                <ListItem button key="서버" onClick={handleItemClick}>
                  <ListItemText primary="서버" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/hw/storage" className={classes.txt_deco_none}>
                <ListItem button key="스토리지" onClick={handleItemClick}>
                  <ListItemText primary="스토리지" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/hw/network" className={classes.txt_deco_none}>
                <ListItem button key="네트워크" onClick={handleItemClick}>
                  <ListItemText primary="네트워크" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/hw/security" className={classes.txt_deco_none}>
                <ListItem button key="보안" onClick={handleItemClick}>
                  <ListItemText primary="보안" />
                </ListItem>
              </Link>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleAccordionChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>기술문의</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/mt/engineer" className={classes.txt_deco_none}>
                <ListItem button key="엔지니어 현황" onClick={handleItemClick}>
                  <ListItemText primary="엔지니어 현황" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/mt/maintenance" className={classes.txt_deco_none}>
                <ListItem button key="유지보수" onClick={handleItemClick}>
                  <ListItemText primary="유지보수" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/mt/question" className={classes.txt_deco_none}>
                <ListItem button key="기술지원문의" onClick={handleItemClick}>
                  <ListItemText primary="기술지원문의" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/mt/reference" className={classes.txt_deco_none}>
                <ListItem button key="자료실" onClick={handleItemClick}>
                  <ListItemText primary="자료실" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/remote" className={classes.txt_deco_none}>
                <ListItem button key="원격지원" onClick={handleItemClick}>
                  <ListItemText primary="원격지원" />
                </ListItem>
              </Link>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleAccordionChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>원격지원</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/remote" className={classes.txt_deco_none}>
                <ListItem button key="원격지원" onClick={handleItemClick}>
                  <ListItemText primary="원격지원" />
                </ListItem>
              </Link>
            </div>
          </AccordionDetails>
        </Accordion>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const data = {
    image: "banner3.jpg",
    title: "Virtual Infrastructure",
    subtitle: "",
    description: `압도적인 시장 점유율과 <br className="mobile" />
      높은 신뢰성 및 안전성을 가진 <br className="pc" /><br className="mobile" />
      VMware 기반 가상화를 구현합니다`,
    button: [
      {
        text: "서버가상화",
        href: "/vm/server"
      },
      {
        text: "데스크탑가상화",
        href: "/vm/desktop"
      },
      {
        text: "스토리지가상화",
        href: "/vm/storage"
      },
      {
        text: "재해복구시스템",
        href: "/vm/DR"
      }
    ]
  };
  
  
  return (
    <div className={classes.root}>
      <div className="header" onMouseLeave={mouseOut}>
        <div className="subclasses_wrap" > 
          <div className="subclasses">
            <div id="subclass1">
              <Link
                to="/#info_container1"
                name="info_container1"
                onClick={scroll_mv}
                className="menu1"
              >
                회사개요
              </Link>
              <Link
                to="/#info_container2"
                name="info_container2"
                onClick={scroll_mv}
                className="menu1"
              >
                인사말
              </Link>
              <Link
                to="/#info_container3"
                name="info_container3"
                onClick={scroll_mv}
                className="menu1"
              >
                사업영역
              </Link>
              <Link
                to="/#info_container4"
                name="info_container4"
                onClick={scroll_mv}
                className="menu1"
              >
                연혁
              </Link>
              <Link
                to="/#info_container5"
                name="info_container5"
                onClick={scroll_mv}
                className="menu1"
              >
                찾아오시는 길
              </Link>
            </div>
            <div id="subclass2">
              <Link
                to="/vm/server"
                className="menu2"
              >
                서버 가상화
              </Link>
              <Link
                to="/vm/desktop"
                className="menu2"
              >
                데스크톱 가상화
              </Link>
              <Link
                to="/vm/storage"
                className="menu2"
              >
                스토리지 가상화
              </Link>
              <Link 
                to="/vm/DR"
                className="menu2">
                재해복구시스템
              </Link>
            </div>
            <div id="subclass3">
              <Link
                to="/hw/server"
                className="menu3"
              >
                서버
              </Link>
              <Link
                to="/hw/storage"
                className="menu3"
              >
                스토리지
              </Link>
              <Link
                to="/hw/network"
                className="menu3"
              >
                네트워크
              </Link>
              <Link
                to="/hw/security"
                className="menu3"
              >
                보안
              </Link>
            </div>
            <div id="subclass4">
              <Link
                to="/mt/engineer"
                className="menu4"
              >
                엔지니어 현황
              </Link>
              <Link
                to="/mt/maintenance"
                className="menu4"
              >
                유지보수
              </Link>
              <Link 
                to="/mt/question" 
                className="menu4">
                기술지원문의
              </Link>
              <Link 
                to="/mt/reference" 
                className="menu4">
                자료실
              </Link>
              <Link 
                to="/remote" 
                className="menu4">
                원격지원
              </Link>
            </div>
            <div id="subclass5">
              <Link 
                to="/remote" 
                className="menu4">
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
            <Link to="/" className={classes.txt_deco_none2}>
              <img src={logo} />
            </Link>
          </div>
          <div className="menus">
            <div id="menu1" onMouseEnter={mouseOver}>
              <Link to="/" className="menu1">
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
              <Link to="/" className="menu6">
                직원전용
              </Link>
            </div>
          </div>
        </div>
      </div>
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default Header;
