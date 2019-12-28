import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SearchField from "./searchField";
import thing from "../../images/379-desktop-wallpaper.png";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

const Design = styled.div`
  width: 50vw;
  img {
    position: absolute;
    top: 20vh;
    margin: 1rem;
    height: 55vh;
  }
  /* border: 1px red solid; */
`;

const Content = styled.div`
  /* border: 1px blue solid; */
  width: 50vw;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 50%;
    margin: auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;

const Header = styled.p`
  font-size: 1rem;
  margin: 2rem 0;
`;

const SearchContainer = styled.div`
  background-color: #fff8e3;
`;

const Legal = styled.div`
  max-height: 10vh;
  height: 10vh;
  display: flex;
  justify-content: center;
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

const Search = ({ setUserData, history }) => {
  return (
    <SearchContainer>
      <Container>
        <Content>
          <div>
            <Title>Search</Title>
            <Header>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum
              quaerat quae eius? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Exercitationem, facere.
            </Header>
            <Header>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              libero.
            </Header>
            <SearchField setUserData={setUserData} history={history} />
          </div>
        </Content>
        <Design>
          <img src={thing} alt="thing" />
        </Design>
      </Container>
      <Legal>
        <a href="https://google.com/" alt="/">
          About
        </a>
        <a href="https://google.com/" alt="/">
          Legal
        </a>
        <a href="https://google.com/" alt="/">
          TOS
        </a>
      </Legal>
    </SearchContainer>
  );
};

Search.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
