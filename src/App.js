import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/home";
import Summary from "./components/summary";
import Search from "./components/search";
import "./App.css";

const App = props => {
  const slideCount = 2;

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = () => {
    if (currentSlide < slideCount) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home setUserData={setUserData} />
          </Route>
          <Route path="/summary">
            <Summary
              userData={userData}
              nextSlide={nextSlide}
              currentSlide={currentSlide}
            />
          </Route>
          <Route path="/search">
            <Search
              username={username}
              setUserData={setUserData}
              setUsername={setUsername}
            />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
