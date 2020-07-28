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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
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
    color:'#000000',
    textDecoration:'none'
  },
  txt_deco_none2:{
    color:'#000000',
    textDecoration:'none'
  },
  clicked_item:{    
    textDecoration:'none',
    backgroundColor:'#D8D8D8',
    color:'#000000'
  },
  unclicked_item:{    
    textDecoration:'none',
    backgroundColor:'#ffffff',
    color:'#000000'
  }
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

  const handleLogout = () => {
    fetch('/logout'); 
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
        <List>
          <Link to="/" className={classes.txt_deco_none}>
            <ListItem button key='aaa' className={props.current_link === '/' ? classes.clicked_item : classes.unclicked_item }>
              <ListItemText primary='aaa' />
            </ListItem>
          </Link>
          <Link to="/customer" className={classes.txt_deco_none}>
            <ListItem button key='bbb' className={props.current_link === '/customer' ? classes.clicked_item : classes.unclicked_item }>
              <ListItemText primary='bbb' />
            </ListItem>
          </Link>
          <Link to="/manager" className={classes.txt_deco_none}>
            <ListItem button key='ccc' className={props.current_link === '/manager' ? classes.clicked_item : classes.unclicked_item }>
              <ListItemText primary='ccc' />
            </ListItem>
          </Link>
        </List>
      <Divider />
      <List>
        <Link to="/journal" className={classes.txt_deco_none}>
          <ListItem button key='ddd' className={props.current_link === '/journal' ? classes.clicked_item : classes.unclicked_item }>
            <ListItemText primary='ddd' />
          </ListItem>
        </Link>

        <Link to="/attendance" className={classes.txt_deco_none}>
          <ListItem button key='eee' className={props.current_link === '/attendance' ? classes.clicked_item : classes.unclicked_item }>
            <ListItemText primary='eee' />
          </ListItem>
        </Link>
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
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link to="/" className={classes.txt_deco_none2}>
            <img src={logo}/>
          </Link>
        </Typography>
        <div className="menus">
          <Link to="/login">
            <Button color="inherit"  onClick={handleLogout}>회사소개</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit"  onClick={handleLogout}>가상화인프라</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit"  onClick={handleLogout}>하드웨어인프라</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit"  onClick={handleLogout}>기술지원</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit"  onClick={handleLogout}>원격지원</Button>
          </Link>
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
