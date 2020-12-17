import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import SignIn from './auth/SignIn';
import Admin from './components/admin/Admins';
import Posts from './components/Posts';
import Customer from './components/customer/Customers';
import Manager from './components/manager/Managers';
import PopUp from './components/popUp/PopUp';
import Board from './components/board/Boards';
import Journal from './components/journal/Journals';
import Attendance from './components/attendance/Attendance';
import profile from './components/Profile';


import $ from 'jquery';
window.$ = $;

const window_size = $(window).width() 
const styles = theme =>({
  
  root: {
    width: "100%",
    marginTop: 0,
    overflowX: "auto",
  },

});

class App2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      session_data:"",
      
    }
    this.callSession = this.callSession.bind(this);
  }

  callSession = async() => {
    const response = await fetch('/get_session');        
    const body = await response.json();    
    return body;
  }
  
  componentDidMount(){
    this.callSession()
        .then(res => this.setState({session_data: res}))
        .catch(err => console.log(err));
  }
  
  render() {
    return (
     <div>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/login" component={SignIn} />
        <Route exact path="/admin/customer" component={Customer} />
        <Route exact path="/admin/manager" component={Manager} />
        <Route exact path="/admin/journal" component={Journal} />
        <Route exact path="/admin/attendance" component={Attendance} />
        <Route exact path="/admin/profile" component={profile} />
        <Route exact path="/admin/popUp" component={PopUp} />
        <Route exact path="/admin/board" component={Board} />
    
        {this.state.session_data.logined ? (
            window_size > 600 ? (<Redirect to='/admin'/>) : (<Redirect to='/admin/profile'/>)
        ) : (
            <Redirect to='/admin/login'/>
        )}
     </div>
    );
  }
}


export default withStyles(styles)(App2);