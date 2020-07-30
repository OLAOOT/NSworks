import React from 'react';
import {Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "../../css/header.css";
import logo from "./../../img/logo.png";
import $ from 'jquery';
window.$ = $;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex:9999,
    height : '64px'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      marginLeft: drawerWidth,
      zIndex:9999,
    },
    height:'64px',
    background:'#fafafa',
    boxShadow:'0px 0px 0px 0px !important'
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position:'absolute',
    right:0
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon_wrap1: {
    position:"absolute",
    right:30,
    width:50
  },
  icon_wrap2: {
    flaot:'right',
    color:'#ffffff',
    textDecoration:'none'
  },
  txt_deco_none:{
    color:'#000000 !important',
    textDecoration:'none'
  },
  txt_deco_none2:{
    color:'#000000 !important',
    textDecoration:'none'
  },
}));

function Header(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  //console.log(props.current_link)
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mouseOver = e => {
    var event_id = e.target.className.replace('menu', '')    
    $('#subclass'+event_id).show();
  }

  const mouseOver2 = e => {
    var event_target_style = e.target.style
    $('.subclasses > *').css('background','#ffffff')
    event_target_style.background = "#D8D8D8"
    
  }

  const mouseOut = e => {
    var event_id = e.target.className.replace('menu', '')        
    $('.subclasses > *').css('background','#ffffff')
    $('#subclass'+event_id).hide();
   
  }

  const scroll_mv = (e) => {
    //if(window.location.href)
    if(document.location.pathname != '/' ){
      document.location.href="/#"+e.target.name;
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#"+e.target.name).offset().top -30
    }, 500);
  };

  $('#details > *').click(function(){
    $('#menuBtn').click()
  })
    
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
        <List>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>회사소개</Typography>
            </AccordionSummary>
            <AccordionDetails id="details">
              <div>
                <Link to="/info/introduce" className={classes.txt_deco_none}>
                  <ListItem button key='회사개요'>
                    <ListItemText primary='회사개요' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/greeting" className={classes.txt_deco_none}>
                  <ListItem button key='인사말'>
                    <ListItemText primary='인사말' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/history" className={classes.txt_deco_none}>
                  <ListItem button key='연혁'>
                    <ListItemText primary='연혁' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/location" className={classes.txt_deco_none}>
                  <ListItem button key='찾아오시는길'>
                    <ListItemText primary='찾아오시는길' />
                  </ListItem>
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <Link to="/VI" className={classes.txt_deco_none}>
              <ListItem button key='Virtual Integration'>
                <ListItemText primary='Virtual Integration' />
              </ListItem>
            </Link>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>가상화인프라</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Link to="/vm/desktop" className={classes.txt_deco_none}>
                  <ListItem button key='서버가상화'>
                    <ListItemText primary='서버가상화' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/vm/storage" className={classes.txt_deco_none}>
                  <ListItem button key='데스크탑가상화'>
                    <ListItemText primary='데스크탑가상화' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/vm/storage" className={classes.txt_deco_none}>
                  <ListItem button key='스토리지가상화'>
                    <ListItemText primary='스토리지가상화' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/vm/DR" className={classes.txt_deco_none}>
                  <ListItem button key='재해복구시스템'>
                    <ListItemText primary='재해복구시스템' />
                  </ListItem>
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>하드웨어인프라</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Link to="/hw/server" className={classes.txt_deco_none} onClick="alert('hi')">
                  <ListItem button key='서버'>
                    <ListItemText primary='서버' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/hw/storage" className={classes.txt_deco_none}>
                  <ListItem button key='스토리지'>
                    <ListItemText primary='스토리지' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/network" className={classes.txt_deco_none}>
                  <ListItem button key='네트워크'>
                    <ListItemText primary='네트워크' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/security" className={classes.txt_deco_none}>
                  <ListItem button key='보안'>
                    <ListItemText primary='보안' />
                  </ListItem>
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>유지보수</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Link to="/info/introduce" className={classes.txt_deco_none}>
                  <ListItem button key='엔지니어 현황'>
                    <ListItemText primary='엔지니어 현황' />
                  </ListItem>
                </Link>
              </div>
              <div>
                <Link to="/info/greeting" className={classes.txt_deco_none}>
                  <ListItem button key='유지보수'>
                    <ListItemText primary='유지보수' />
                  </ListItem>
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
    <CssBaseline />
    <div className="header">
      <div className="tool">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          id="menuBtn"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link to="/" className={classes.txt_deco_none2}>
            <img src={logo}/>
          </Link>
        </Typography>
        <div className="menus">
          <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu1">
            <Link to="#info_container1" className="menu1">회사소개</Link>
            <div id="subclass1" className="subclasses" >
              <Link to="#info_container1" name="info_container1" onClick={scroll_mv} onMouseOver={mouseOver2} className="menu1">회사개요</Link>
              <Link to="#info_container2" name="info_container2" onClick={scroll_mv} onMouseOver={mouseOver2} className="menu1">인사말</Link>
              <Link to="#info_container3" name="info_container3" onClick={scroll_mv} onMouseOver={mouseOver2} className="menu1">연혁</Link>
              <Link to="#info_container4" name="info_container4" onClick={scroll_mv} onMouseOver={mouseOver2} className="menu1">찾아오시는 길</Link>                        
            </div>
          </div>
          <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu2">
            <Link to="/0" className="menu2">Virtual Integration</Link>
          </div>
          <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu3">
            <Link to="#0" className="menu3">가상화인프라</Link>
            <div id="subclass3" className="subclasses" >
              <Link to="/vm/server" onMouseOver={mouseOver2} className="menu3">서버 가상화</Link>
              <Link to="/vm/desktop" onMouseOver={mouseOver2} className="menu3">데스크탑 가상화</Link>
              <Link to="/vm/storage" onMouseOver={mouseOver2} className="menu3">스토리지 가상화</Link>
              <Link to="/vm/DR" onMouseOver={mouseOver2} className="menu3">재해복구시스템(DR)</Link>
            </div>
          </div>
          <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu4">
            <Link to="#0" className="menu4">하드웨어인프라</Link>
            <div id="subclass4" className="subclasses" >
              <Link to="/hw/server" onMouseOver={mouseOver2} className="menu4">서버</Link>
              <Link to="/hw/storage" onMouseOver={mouseOver2} className="menu4">스토리지</Link>
              <Link to="/hw/network" onMouseOver={mouseOver2} className="menu4">네트워크</Link>
              <Link to="/hw/security" onMouseOver={mouseOver2} className="menu4">보안</Link>
            </div>
          </div>
          <div onMouseOver={mouseOver} onMouseOut={mouseOut} id="menu5">
            <Link to="#0" className="menu5">유지보수</Link>
            <div id="subclass5" className="subclasses" >
              <Link to="/mt/engineer" className="menu5">엔지니어 현황</Link>
              <Link to="/mt/maintenance" className="menu5">유지보수</Link>
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
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
