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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import "../../css/header.css";
import logo from "./../../img/logo.png";
import $ from "jquery";
window.$ = $;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

const Typography = withStyles(theme => ({
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

  const handleAccordionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDrawerToggle = open => () => {
    setExpanded(false);
    setMobileOpen(open);
  };

  const handleItemClick = () => {
    setExpanded(false);
    setMobileOpen(false);
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

  const scroll_mv = e => {
    console.log($(this).parent().attr('name'))
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

  $('.m_info_container').click(function(){    
    var id=$(this).attr('id').replace('m_','')
    if (document.location.pathname !== "/") {
      document.location.href = "/#" + id;
    }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#'+id).offset().top - 30
      },
      500
    );
  })
  $(document).ready(function() {
    //alert(document.location.href.indexOf('undefined'))
    //if(document.location.href.indexOf('undefined') === 22)
      
      //document.history.back()
  })
  $("#details > *").click(function(e) {
    $("#menuBtn").click();
    if(e.target.parentNode.parentNode.parentNode.href !== undefined)
      document.location.href = e.target.parentNode.parentNode.parentNode.href
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
              <Link to="/#info_container1" className={classes.txt_deco_none}>
                <ListItem button key="회사개요" onClick={handleItemClick}>
                  <ListItemText primary="회사개요" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/#info_container2" className={classes.txt_deco_none}>
                <ListItem button key="인사말" onClick={handleItemClick}>
                  <ListItemText primary="인사말" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/#info_container3" className={classes.txt_deco_none}>
                <ListItem button key="사업영역" onClick={handleItemClick}>
                  <ListItemText primary="사업영역" />
                </ListItem>
              </Link>
            </div>

            <div>
              <Link to="/#info_container4" className={classes.txt_deco_none}>
                <ListItem button key="연혁" onClick={handleItemClick}>
                  <ListItemText primary="연혁" />
                </ListItem>
              </Link>
            </div>
            <div>
              <Link to="/#info_container5" className={classes.txt_deco_none}>
                <ListItem button key="찾아오시는길" onClick={handleItemClick}>
                  <ListItemText primary="찾아오시는길" />
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
                <ListItem button key="데스크탑가상화" onClick={handleItemClick}>
                  <ListItemText primary="데스크탑가상화" />
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
            <Typography className={classes.heading}>유지보수</Typography>
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
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleAccordionChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>문의 & 원격지원</Typography>
          </AccordionSummary>
          <AccordionDetails id="details">
            <div>
              <Link to="/question" className={classes.txt_deco_none}>
                <ListItem button key="문의" onClick={handleItemClick}>
                  <ListItemText primary="문의" />
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
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <div className="header">
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
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu1">
              <Link to="/" className="menu1">
                회사소개
              </Link>
              <div id="subclass1" className="subclasses">
                <Link
                  to="/#info_container1"
                  name="info_container1"
                  onClick={scroll_mv}
                  onMouseOver={mouseOver2}
                  className="menu1"
                >
                  회사개요
                </Link>
                <Link
                  to="/#info_container2"
                  name="info_container2"
                  onClick={scroll_mv}
                  onMouseOver={mouseOver2}
                  className="menu1"
                >
                  인사말
                </Link>
                <Link
                  to="/#info_container3"
                  name="info_container3"
                  onClick={scroll_mv}
                  onMouseOver={mouseOver2}
                  className="menu1"
                >
                  사업영역
                </Link>
                <Link
                  to="/#info_container4"
                  name="info_container4"
                  onClick={scroll_mv}
                  onMouseOver={mouseOver2}
                  className="menu1"
                >
                  연혁
                </Link>
                <Link
                  to="/#info_container5"
                  name="info_container5"
                  onClick={scroll_mv}
                  onMouseOver={mouseOver2}
                  className="menu1"
                >
                  찾아오시는 길
                </Link>
              </div>
            </div>
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu2">
              <Link to="/vm/server" className="menu2">
                가상화인프라
              </Link>
              <div id="subclass2" className="subclasses">
                <Link
                  to="/vm/server"
                  onMouseOver={mouseOver2}
                  className="menu2"
                >
                  서버 가상화
                </Link>
                <Link
                  to="/vm/desktop"
                  onMouseOver={mouseOver2}
                  className="menu2"
                >
                  데스크탑 가상화
                </Link>
                <Link
                  to="/vm/storage"
                  onMouseOver={mouseOver2}
                  className="menu2"
                >
                  스토리지 가상화
                </Link>
                <Link to="/vm/DR" onMouseOver={mouseOver2} className="menu2">
                  재해복구시스템(DR)
                </Link>
              </div>
            </div>
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu3">
              <Link to="/hw/server" className="menu3">
                하드웨어인프라
              </Link>
              <div id="subclass3" className="subclasses">
                <Link
                  to="/hw/server"
                  onMouseOver={mouseOver2}
                  className="menu3"
                >
                  서버
                </Link>
                <Link
                  to="/hw/storage"
                  onMouseOver={mouseOver2}
                  className="menu3"
                >
                  스토리지
                </Link>
                <Link
                  to="/hw/network"
                  onMouseOver={mouseOver2}
                  className="menu3"
                >
                  네트워크
                </Link>
                <Link
                  to="/hw/security"
                  onMouseOver={mouseOver2}
                  className="menu3"
                >
                  보안
                </Link>
              </div>
            </div>
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu4">
              <Link to="/mt/maintenance" className="menu4">
                유지보수
              </Link>
              <div id="subclass4" className="subclasses">
                <Link
                  to="/mt/engineer"
                  onMouseOver={mouseOver2}
                  className="menu4"
                >
                  엔지니어 현황
                </Link>
                <Link
                  to="/mt/maintenance"
                  onMouseOver={mouseOver2}
                  className="menu4"
                >
                  유지보수
                </Link>
              </div>
            </div>
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu5">
              <Link to="/question" className="menu5">
                문의 & 원격지원
              </Link>
              <div id="subclass5" className="subclasses">
                <Link to="/question" onMouseOver={mouseOver2} className="menu5">
                  문의
                </Link>
                <Link to="/remote" onMouseOver={mouseOver2} className="menu5">
                  원격지원
                </Link>
              </div>
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
