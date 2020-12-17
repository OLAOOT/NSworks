import React, { useState, useRef, useEffect, createContext } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import InfoContext from "./InfoContext";
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

import Hardware1 from "./views/hardwares/Hardware1";
import Hardware2 from "./views/hardwares/Hardware2";
import Hardware3 from "./views/hardwares/Hardware3";
import Hardware4 from "./views/hardwares/Hardware4";

import Support1 from "./views/support/Support1";
import Support2 from "./views/support/Support2";
import Support3 from "./views/support/Support3";
import Support4 from "./views/support/Support4";

import App2 from "./App2";
import Remote from "./views/q&r/Remote";
import $ from "jquery";
window.$ = $;

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  const [position, setPosition] = useState("header0");  
  const [articles,get_session] = useState({hits:[]});
  useEffect(async() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
    
  }, [location]);
  return (
    <InfoContext.Provider value={{ position, setPosition }}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <LayoutDefault>
                    <Home {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/info/introduce"
                render={(props) => (
                  <LayoutDefault>
                    <Info1 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/info/greeting"
                render={(props) => (
                  <LayoutDefault>
                    <Info2 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/info/history"
                render={(props) => (
                  <LayoutDefault>
                    <Info3 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/info/location"
                render={(props) => (
                  <LayoutDefault>
                    <Info4 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/vm/server"
                render={(props) => (
                  <LayoutDefault>
                    <Virtualization1 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/vm/desktop"
                render={(props) => (
                  <LayoutDefault>
                    <Virtualization2 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/vm/storage"
                render={(props) => (
                  <LayoutDefault>
                    <Virtualization3 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/vm/DR"
                render={(props) => (
                  <LayoutDefault>
                    <Virtualization4 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/hw/server"
                render={(props) => (
                  <LayoutDefault>
                    <Hardware1 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/hw/storage"
                render={(props) => (
                  <LayoutDefault>
                    <Hardware2 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/hw/network"
                render={(props) => (
                  <LayoutDefault>
                    <Hardware3 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/hw/security"
                render={(props) => (
                  <LayoutDefault>
                    <Hardware4 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/mt/engineer"
                render={(props) => (
                  <LayoutDefault>
                    <Support1 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/mt/maintenance"
                render={(props) => (
                  <LayoutDefault>
                    <Support2 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/mt/question"
                render={(props) => (
                  <LayoutDefault>
                    <Support3 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/mt/reference"
                render={(props) => (
                  <LayoutDefault>
                    <Support4 {...props} />
                  </LayoutDefault>
                )}
              />
              <Route
                exact
                path="/remote"
                render={(props) => (
                  <LayoutDefault>
                    <Remote {...props} />
                  </LayoutDefault>
                )}
              />
              <App2/>
            </Switch>
          </Router>
        )}
      />
    </InfoContext.Provider>
  );
};

export default App;
