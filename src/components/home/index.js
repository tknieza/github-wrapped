import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import githubREST from "../../api/githubREST";

const Input = styled.input`
  resize: none;
  width: 12rem;
  height: 2rem;
  font-size: 1.6rem;
  transition: all 0.2s ease-out;
  color: #282c34;
  :focus {
    outline: none;
    border-bottom: 2px gray solid;
    border-radius: 1px;
  }
  border: 0;
  border-bottom: 3px;
  padding: 0.5rem 0;
  margin: 1rem;
  margin-right: 1rem;
`;

const Form = styled.form`
  background: white;
  border-radius: 30px;
`;

const Button = styled.button`
  background-color: #b1ede8;
  border-radius: 25px;
  color: #282c34;
  border: none;
  margin: 0.2rem;
  font-size: 1.2rem;
  padding: 0.6rem;
  :hover {
    background-color: #ff6978;
    color: white;
  }
  transition: all 0.2s ease-in-out;
`;

export default withRouter(({ history, setUserData, ...otherProps }) => {
  const [username, setUsername] = useState("");
  const handleChange = event => setUsername(event.target.value);

  return (
    <div>
      <h1>GitHub Year Wrapped</h1>
      <Form
        onSubmit={event => {
          githubREST(event, username, setUserData, history.push);
        }}
      >
        <Input placeholder="Search" onChange={handleChange} />
        <Button
          onClick={event => {
            githubREST(event, username, setUserData, history.push);
          }}
        >
          <span role="img" aria-label="Search">
            &#x1f50d;
          </span>
        </Button>
      </Form>
    </div>
  );
});
