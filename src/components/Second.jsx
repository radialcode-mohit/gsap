import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AsideBar from "./AsideBar";

const Second = ({ toogle, frst, setfrst }) => {
  return (
    <div>
      <section>
        <Container>
          <button
            className="btn btn-primary position-relative z-3"
            onClick={toogle}
          >
            togle
          </button>
          <Row>
            <AsideBar
              colorblue2="clrblue"
              navactive={frst}
              setnavactive={setfrst}
            />
            <Col xs={12} className=" bg-success-subtle">
              <div
                style={{ fontSize: "48px" }}
                className=" d-flex h-100 align-items-center justify-content-center min-vh-100 text-danger"
              >
                about
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Second;
