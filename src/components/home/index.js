import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as styles from "./HomeStyles";
import LandingPageDesign from "../../images/LandingPageDesign.svg";

const Home = ({ history }) => {
  const { Container, Design, AppTitle, Links, Header, Content } = styles;

  return (
    <Container>
      <Design>
        <img src={LandingPageDesign} alt="Landing page design not found" />
      </Design>

      <Header>
        <AppTitle>GitHub Wrapped</AppTitle>
        <Links>
          <span onClick={() => history.push("/about")}>Why Wrapped?</span>
          <span onClick={() => history.push("/new")}>Newbies</span>
          <a href="https://github.com/tknieza" alt="no">
            Codebase
          </a>
        </Links>
      </Header>

      <Content>
        <h1>All of the projects. Wrapped.</h1>
        <p>Profile overview highlighting how you contributed to open-source</p>
        <button onClick={() => history.push("/search")}>Start now</button>
      </Content>
    </Container>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Home);
