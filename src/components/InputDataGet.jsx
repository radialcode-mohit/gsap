import React, { useState } from "react";
import { Container } from "react-bootstrap";

const InputDataGet = () => {
  const value = {
    name: "",
    email: "",
  };
  const [handleData, setHandleData] = useState(value);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleData.name && handleData.email) {
      console.log(handleData);
    } else {
      setError(true);
    }
  };
  return (
    <section>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <form
          className="text-center"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setHandleData({ ...handleData, name: e.target.value });
            }}
            placeholder="name"
            className="mb-3"
            value={handleData.name}
          />
          {handleData.name === "" && error && <p>error</p>}
          <br />
          <input
            type="text"
            onChange={(e) => {
              setHandleData({ ...handleData, email: e.target.value });
            }}
            placeholder="email"
            className="mb-3"
            value={handleData.email}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </Container>
    </section>
  );
};

export default InputDataGet;
