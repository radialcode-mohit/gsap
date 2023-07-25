import React, { useState } from "react";

const TopToBottom = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className="vh-100">
      <section className="vh-100">
        <section className="vh-100">
          <button
            onClick={() => {
              clikontop();
            }}
            className={`btn btn-primary  position-fixed end-0 bottom-0 ${
              first ? "d-none" : "d-block"
            } `}
          >
            top
          </button>
        </section>
      </section>
      <section className="vh-100"></section>
      <section className="vh-100"></section>
      <section className="vh-100"></section>
      <section className="vh-100"></section>
      <section className="vh-100"></section>
      <section className="vh-100"></section>
    </section>
  );
};

export default TopToBottom;
