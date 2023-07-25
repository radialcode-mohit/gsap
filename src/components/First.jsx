import React, { useState } from "react";
import AsideBar from "./AsideBar";
import { Col, Container, Row } from "react-bootstrap";

const First = ({ toogle, frst, setfrst }) => {
  return (
    <div>
      <section>
        <button
          className="btn btn-primary position-relative z-2"
          onClick={toogle}
        >
          togle
        </button>
        <Container>
          <Row>
            <AsideBar
              navactive={frst}
              setnavactive={setfrst}
              colorblue="clrblue"
            />
            <Col xs={12} className=" bg-success-subtle ms _16">
              <div
                style={{ fontSize: "48px" }}
                className="text-danger d-flex h-100 align-items-center justify-content-center min-vh-100"
              >
                HOME
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default First;
