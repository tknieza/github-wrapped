import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import githubREST from "../../../api/githubREST";

const Input = styled.input`
  width: 100%;
  height: 1.2rem;
  font-size: 1.3rem;
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
`;

const Form = styled.form`
  background: white;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  div {
    width: 70%;
  }

  div:last-of-type {
    width: 30%;
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: #b1ede8;
  border-radius: 30px;
  color: #282c34;
  border: none;
  font-size: 1.2rem;
  height: 2.6rem;
  width: 2.6rem;
  :hover {
    background-color: #ff6978;
    color: white;
  }
  transition: all 0.2s ease-in-out;
`;

const SearchField = ({ setUserData, history }) => {
  const [username, setUsername] = useState("");

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <Form
      onSubmit={event => {
        githubREST(event, username, setUserData, history.push);
      }}
    >
      <div>
        <Input placeholder="Username" onChange={handleChange} />
      </div>

      <div>
        <Button
          onClick={event => {
            githubREST(event, username, setUserData, history.push);
          }}
        >
          <span role="img" aria-label="Search">
            &#x1f50d;
          </span>
        </Button>
      </div>
    </Form>
  );
};

SearchField.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default SearchField;
