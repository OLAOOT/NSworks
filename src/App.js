import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
// import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Info from "./views/infos/Info";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    // const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    // trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LayoutDefault>
                  <Home {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/info"
              render={props => (
                <LayoutDefault>
                  <Info {...props} />
                </LayoutDefault>
              )}
            />
          </Switch>
        </Router>
      )}
    />
  );
};

export default App;
