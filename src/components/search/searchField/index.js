import React, { useState } from "react";
import PropTypes from "prop-types";
import * as styles from "./searchFieldStyles";
import githubREST from "../../../api/githubREST";

const SearchField = ({ setUserData, setLoading, history }) => {
  const [username, setUsername] = useState("");

  const { Input, Form, Button } = styles;

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = event => {
    setLoading(true);
    githubREST(event, username, setUserData, history.push);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input placeholder="Username" onChange={handleChange} />
      </div>

      <div>
        <Button onClick={handleSubmit}>
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
  setLoading: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default SearchField;
