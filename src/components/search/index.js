import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SearchField from "./searchField";

const Search = ({ setUserData, history }) => {
  return (
    <div>
      <h1>Search</h1>
      <SearchField setUserData={setUserData} history={history} />
    </div>
  );
};

Search.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
