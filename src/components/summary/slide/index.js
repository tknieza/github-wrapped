import React from "react";

export default props => {
  const { index, children } = props;
  return (
    <div>
      {children}
      <h1>Slide {index}</h1>
    </div>
  );
};
