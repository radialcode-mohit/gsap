import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Props = (props) => {
  return (
    <Container>
      <nav className="d-flex justify-content-between">
        <Link to="/nav">
          <h1>logo</h1>
        </Link>
        <ul className="d-flex ps-0 mb-0  gap-5">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>{props.class}</li>
        </ul>
        <button>login</button>
      </nav>
    </Container>
  );
};

export default Props;
