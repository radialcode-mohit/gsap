import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import cloud from "../assets/images/img/badal.png";
import tree from "../assets/images/img/trees.png";
const Sun = () => {
  useEffect(() => {
    gsap.fromTo(
      ".sun",
      {
        duration: 5,
        yPercent: -100,
        xPercent: -100,
        opacity: 0,
      },
      {
        duration: 5,
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".section_blue",
      {
        duration: 5,

        opacity: 0,
      },
      {
        duration: 5,
        opacity: 1,
        backgroundColor: "#ADD8E6",
      }
    );
    gsap.fromTo(
      ".cloud",
      {
        duration: 25,
        xPercent: 20,
        opacity: 0,
      },
      {
        duration: 25,
        xPercent: -100,
        opacity: 1,
      }
    );
  });
  return (
    <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center section_blue  overflow-hidden">
      <div class="sun position-absolute sun z-3"></div>
      <div className=" position-absolute cloud_pos cloud top-0">
        <img src={cloud} alt="cloud" />
      </div>
      <div className=" position-absolute bottom-0">
        <img src={tree} alt="" className="w-100" />
      </div>
    </section>
  );
};

export default Sun;
