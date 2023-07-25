import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imagemain from "../assets/images/img/firstsecmainimg.png";
import { gsap } from "gsap";
import { useEffect } from "react";
const GsapHeroSec = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heroimg",
      {
        stagger: 1,
        width: 0,
        xPercent: 100,
        opacity: 0,
      },
      {
        width: 100,
        stagger: 1,
        xPercent: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".text",
      {
        stagger: 1,
        xPercent: -100,
        opacity: 0,
      },
      {
        stagger: 1,
        xPercent: 0,
        opacity: 1,
      }
    );
  });
  return (
    <section className=" min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
      <Container className="">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1
              style={{ fontSize: "80px" }}
              className=" fw-semibold text-white mb-3 text"
            >
              Funding Style Corporation
            </h1>
            <p style={{ fontSize: "25px" }} className=" fw-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, non.
              Aliquid, eligendi perferendis! Delectus exercitationem dolore iste
              esse incidunt, iusto nesciunt tenetur fuga corporis illum
              consequuntur labore. Doloribus, dolore animi.
            </p>
            <button className="letsgobtn text-white p-2">Let's Go</button>
          </Col>
          <Col lg={6}>
            <img src={imagemain} alt="imagemain" className="w-100 heroimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GsapHeroSec;
