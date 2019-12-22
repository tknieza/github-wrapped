import React from "react";
import PropTypes from "prop-types";

const Slide1 = ({ userData }) => {
  return (
    <div>
      <h1>Slide 1</h1>
      <h2>{userData.metadata.login}</h2>
      <img src={userData.metadata.avatar_url} alt="avatar" />
    </div>
  );
};

Slide1.propTypes = {
  userData: PropTypes.object.isRequired
};

export default Slide1;
