import React from "react";
import { withRouter } from "react-router-dom";

const Summary = ({ userData, ...otherProps }) => {
  console.log(userData.id);
  console.log(userData.login);
  console.log(userData.organizations_url);
  console.log(userData.received_events_url);
  console.log(userData.repos_url);
  console.log(userData.starred_url);
  console.log(userData.subscriptions_url);
  console.log(userData.score);

  return (
    <div>
      <h1>Year Wrapped 2019</h1>
    </div>
  );
};

export default withRouter(Summary);
