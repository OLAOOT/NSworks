import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory();
const theme = createMuiTheme({
  typography: {
      fontFamily: '"noto_sans", serif',
  },
});
ReactDOM.render(
  <Router history={history} theme={theme}>
    <App
      style={{
        fontFamily: "NanumSquare !important"
      }}  
    />
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
