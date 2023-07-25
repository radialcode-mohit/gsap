import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

const GsapPraactice = () => {
  gsap.registerPlugin(ScrollTrigger);
  const value = "Welcome to Cozy Capys NFT ";
  const newArr = value.split(" ").map((obj) => obj.split(""));
  gsap.fromTo(
    ".text_split_child_appendix",
    {
      ease: "elastic.out(.6, 0.3)",
      y: -100,
      stagger: 0.08,
      autoAlpha: 0,
      duration: 1,
      // delay: 3.3,
    },
    {
      ease: "elastic.out(.6, 0.3)",
      y: 0,
      stagger: 0.08,
      autoAlpha: 1,
      duration: 1,
      // delay: 3.3,
    }
  );
  useEffect(() => {
    let trying = gsap.timeline({
      scrollTrigger: {
        trigger: ".main_parent",
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        scrub: true,
      },
    });
    trying.fromTo(
      ".child1",
      {
        xPercent: 20,
      },
      {
        xPercent: 0,
        duration: 3.4,
      }
    );
    let trying2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main_parent2",
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        scrub: true,
      },
    });
    trying2.fromTo(
      ".child2",
      {
        xPercent: -20,
      },
      {
        xPercent: 0,
        duration: 3.4,
      }
    );
  }, []);

  return (
    <section className=" vh_unlmtd ">
      <div className="main_parent">
        {" "}
        <div className="container bg-light min-vh-100 child1">
          <h1 className="text-center heroText_width clr_white ff_Cherry fs_6xl fw-normal lh_103 mx-auto hero_text_shaddow mb-0 pb-1">
            {newArr.map((obj, i) => (
              <span key={i} className="add_clr d-inline-block">
                {obj.map((data, i) => (
                  <span
                    key={i}
                    className="text_split_child_appendix d-inline-block"
                  >
                    {data}
                  </span>
                ))}
                &nbsp;
              </span>
            ))}
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            sed optio, blanditiis neque impedit sequi? Quasi temporibus ullam
            praesentium, corporis ratione assumenda libero laborum. Officiis,
            inventore. Sed, impedit esse.
          </p>
        </div>
      </div>
      <div className="main_parent2">
        {" "}
        <div className="container bg-light min-vh-100 child2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            sed optio, blanditiis neque impedit sequi? Quasi temporibus ullam
            praesentium, corporis ratione assumenda libero laborum. Officiis,
            inventore. Sed, impedit esse.
          </p>
        </div>
      </div>
      <div className="main_parent3">
        {" "}
        <div className="container bg-light min-vh-100 child3">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            sed optio, blanditiis neque impedit sequi? Quasi temporibus ullam
            praesentium, corporis ratione assumenda libero laborum. Officiis,
            inventore. Sed, impedit esse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GsapPraactice;
