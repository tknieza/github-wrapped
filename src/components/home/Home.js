import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  resize: none;
  width: 12rem;
  height: 2rem;
  font-size: 1.6rem;
  transition: all 0.2s ease-out;
  color: #282c34;
  :focus {
    outline: none;
    border-bottom: 2px #282c34 solid;
    border-radius: 1px;
  }
  border: 0;
  border-bottom: 3px;
  padding: 0.5rem 0;
  margin: 1rem;
  margin-right: 0;
`;

const Form = styled.form`
  background: white;
  border-radius: 30px;
`;

const Button = styled.button`
  background: none;
  color: #282c34;
  border: none;
  margin: 1rem;
  font-size: 1.6rem;
`;

const Home = ({ history, setUserData, ...otherProps }) => {
  const [username, setUsername] = useState("");
  const gitHubUserSearch = "https://api.github.com/search/users?q=";
  const handleChange = event => setUsername(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    fetch(gitHubUserSearch + username)
      .then(response => response.json())
      .then(json => {
        setUserData(json.items[0]);
      })
      .then(() => {
        history.push("/summary");
      })
      .catch(response => console.log(response));
  };
  return (
    <div>
      <h1>GitHub Year Wrapped</h1>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search" onChange={handleChange} />
        <Button onClick={handleSubmit}>+</Button>
      </Form>
    </div>
  );
};

export default withRouter(Home);
