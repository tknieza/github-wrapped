import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SearchField from "./searchField";
import thing from "../../images/379-desktop-wallpaper.png";

const Container = styled.div`
  background-color: #fff8e3;
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
`;

const Design = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  img {
    width: 50vw;
  }
  border: 1px red solid;
`;

const Content = styled.div`
  border: 1px blue solid;
`;

const Search = ({ setUserData, history }) => {
  return (
    <Container>
      <Content>
        <h1>Search</h1>
        <SearchField setUserData={setUserData} history={history} />
      </Content>
      <Design>
        <img src={thing} alt="thing" />
      </Design>
    </Container>
  );
};

Search.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
