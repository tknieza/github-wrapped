import React from "react";
import { withRouter } from "react-router-dom";
import Slide from "./slide";

export default withRouter(({ history, userData }) => {
  if (Object.keys(userData).length < 1) {
    history.push("/");
  }
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
    <div></div>
  );
});
