import React from "react";
import { withRouter } from "react-router-dom";
import Slide from "./slide";

const Summary = ({ history, userData, ...otherProps }) => {
  return Object.keys(userData).length > 0 ? (
    <div>
      <h1>{userData.metadata.login}</h1>
      <img src={userData.metadata.avatar_url} alt="avatar" />
      <Slide index="1">
        {userData.repos ? (
          userData.repos.map(val => <h1 key={val.id}>{val.name}</h1>)
        ) : (
          <h1>None</h1>
        )}
      </Slide>
    </div>
  ) : (
    <div>BAD ENTRY</div>
  );
};

export default withRouter(Summary);
