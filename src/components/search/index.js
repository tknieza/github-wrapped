import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import SearchField from "./searchField";
import * as styles from "./searchStyles";
import thing from "../../images/379-desktop-wallpaper.png";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Search = ({ setUserData, history }) => {
  const [loading, setLoading] = useState(false);

  const {
    Container,
    Design,
    Content,
    Title,
    Header,
    SearchContainer,
    Legal,
    LoaderBackground,
    LoaderContainer
  } = styles;

  const PageLoad = (
    <LoaderBackground>
      <LoaderContainer>
        <Loader type="Grid" color="#A1A1A1" height={200} width={200} />
      </LoaderContainer>
    </LoaderBackground>
  );

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
            <SearchField
              setUserData={setUserData}
              setLoading={setLoading}
              history={history}
            />
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
      {loading ? PageLoad : null}
    </SearchContainer>
  );
};

Search.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
