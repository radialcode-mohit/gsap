import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AsideBar from "./AsideBar";

const Third = ({ toogle, frst, setfrst }) => {
  return (
    <div>
      <section>
        <Container>
          <button
            className="btn btn-primary position-relative z-2"
            onClick={toogle}
          >
            togle
          </button>
          <Row>
            <AsideBar
              colorblue3="clrblue"
              navactive={frst}
              setnavactive={setfrst}
            />
            <Col xs={12} className=" bg-success-subtle ">
              <div
                style={{ fontSize: "48px" }}
                className="text-danger d-flex h-100 align-items-center justify-content-center min-vh-100"
              >
                Contact US
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Third;
