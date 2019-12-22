import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import posed from "react-pose";
import LandingPageDesign from "../../images/LandingPageDesign.svg";

const Header = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const AppTitle = styled.h1`
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
  margin-left: 2rem;
  padding-top: 0.6rem;
  a,
  span {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0.5rem;
    opacity: 0.7;
    transition: opacity 0.12s ease-in-out;
    user-select: none;
    text-decoration: none;
    color: #424242;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  padding: 1.4rem;
`;

const Design = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 5rem;
  right: 1rem;

  img {
    width: 50vw;
  }
`;

const MainDisplay = styled.div`
  position: fixed;
  overflow: auto;
  bottom: 0;
`;

const Content = styled.div`
  position: relative;
  bottom: 2rem;
  width: 18rem;
  overflow: auto;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 0.9rem;
  }

  p {
    margin: 0 0 3rem 0.5rem;
    opacity: 0.5;
    line-height: 1.5rem;
  }

  button {
    margin-left: 0.5rem;
    border: 2px #024059 solid;
    border-radius: 10px;
    padding: 0.5rem 2rem;
    color: #024059;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    :hover {
      background: #024059;
      color: white;
    }

    :active {
      transition: all 0.05s ease-in-out;
      background: none;
      color: #024059;
    }
  }
`;

export default withRouter(({ history, setUserData }) => {
  const [boxVisible, setboxVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setboxVisible(!boxVisible);
    }, 1000);
  });

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

      <MainDisplay>
        <Content>
          <h1>All of the projects. Wrapped.</h1>
          <p>
            Profile overview highlighting how you contributed to open-source
          </p>
          <button onClick={() => history.push("/search")}>Start now</button>
        </Content>
      </MainDisplay>
    </Container>
  );
});
