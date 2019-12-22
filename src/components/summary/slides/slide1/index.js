import React from "react";

export default ({ userData }) => {
  return (
    <div>
      <h1>Slide 1</h1>
      <h2>{userData.metadata.login}</h2>
      <img src={userData.metadata.avatar_url} alt="avatar" />
    </div>
  );
};
