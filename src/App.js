import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/home";
import Summary from "./components/summary";
import "./App.css";

const App = props => {
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setUserData={setUserData} />
            </Route>
            <Route path="/summary">
              <Summary userData={userData} />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
