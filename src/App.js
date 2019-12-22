import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./components/home";
import Summary from "./components/summary";
import Search from "./components/search";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState({});

  const routes = [
    {
      path: "/",
      name: "Home",
      Component: () => <Home setUserData={setUserData} />
    },
    {
      path: "/summary",
      name: "Summary",
      Component: () => <Summary userData={userData} />
    },
    {
      path: "/search",
      name: "Search",
      Component: () => <Search setUserData={setUserData} />
    },
    { path: "*", name: "404", Component: () => <Redirect to="/" /> }
  ];

  return (
    <div className="App">
      <Router>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
    </div>
  );
};

export default App;
