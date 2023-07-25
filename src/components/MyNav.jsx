import React from "react";
import { Container } from "react-bootstrap";

const MyNav = () => {
  return (
    <Container>
      <nav className="d-flex justify-content-between">
        <h1>logo</h1>
        <ul className="d-flex ps-0 mb-0  gap-5">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
        <button>login</button>
      </nav>
    </Container>
  );
};

export default MyNav;
