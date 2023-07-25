import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

const InputColors = () => {
  const [InputValue, setInputValue] = useState("");
  return (
    <section className="vh-100 d-flex text-center align-items-center">
      <Container>
        <input
          className="border-2 px-3 py-2 border"
          style={{ background: InputValue }}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="enter-color"
        />
      </Container>
    </section>
  );
};

export default InputColors;
