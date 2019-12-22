import React from "react";
import { withRouter } from "react-router-dom";
import SearchField from "./searchField";

export default withRouter(({ username, setUserData, setUsername, history }) => {
  return (
    <div>
      <SearchField
        username={username}
        setUserData={setUserData}
        setUsername={setUsername}
        history={history}
      />
    </div>
  );
});
