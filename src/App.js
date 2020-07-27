import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Info1 from "./views/infos/Info1";
import Info2 from "./views/infos/Info2";
import Info3 from "./views/infos/Info3";
import Info4 from "./views/infos/Info4";

import Virtualization1 from "./views/virtualizations/Virtualization1";
import Virtualization2 from "./views/virtualizations/Virtualization2";
import Virtualization3 from "./views/virtualizations/Virtualization3";
import Virtualization4 from "./views/virtualizations/Virtualization4";

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
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
              path="/info/introduce"
              render={props => (
                <LayoutDefault>
                  <Info1 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/info/greeting"
              render={props => (
                <LayoutDefault>
                  <Info2 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/info/history"
              render={props => (
                <LayoutDefault>
                  <Info3 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/info/location"
              render={props => (
                <LayoutDefault>
                  <Info4 {...props} />
                </LayoutDefault>
              )}
            />

            <Route
              exact
              path="/vm/server"
              render={props => (
                <LayoutDefault>
                  <Virtualization1 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/vm/desktop"
              render={props => (
                <LayoutDefault>
                  <Virtualization2 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/vm/storage"
              render={props => (
                <LayoutDefault>
                  <Virtualization3 {...props} />
                </LayoutDefault>
              )}
            />
            <Route
              exact
              path="/vm/DR"
              render={props => (
                <LayoutDefault>
                  <Virtualization4 {...props} />
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
