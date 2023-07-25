import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MyData } from "../assets/js/mine.js";
const Cards = () => {
  return (
    <section>
      <Container>
        <Row>
          {MyData.map((val) => {
            return (
              <Col lg={3}>
                <img src={val.Image} alt="image" className="w-100" />
                <h3>{val.heading}</h3>
                <p>{val.para}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
