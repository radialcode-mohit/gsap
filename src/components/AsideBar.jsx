import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AsideBar = ({
  navactive,
  colorblue,
  colorblue2,
  colorblue3,
  colorblue4,
}) => {
  return (
    <>
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          setfirst(!first);
        }}
      >
        toogle
      </button> */}

      <Col
        xs={3}
        className={` position-absolute top-0 px-0
  ${navactive ? "start-0" : "start_100"}`}
      >
        <ul className="d-flex flex-column cursur_pointer justify-content-center align-items-center ps-0 mb-0 min-vh-100 w-100 bg-danger">
          <Link to="/">
            <li
              style={{ fontSize: "25px" }}
              className={`text_white mb-5 cursur_pointer ${colorblue}`}
            >
              home
            </li>
          </Link>
          <Link to="/second">
            <li
              style={{ fontSize: "25px" }}
              className={`text_white mb-5 cursur_pointer ${colorblue2}`}
            >
              about
            </li>
          </Link>
          <Link to="/third">
            <li
              style={{ fontSize: "25px" }}
              className={`text_white mb-5 cursur_pointer ${colorblue3}`}
            >
              contact us
            </li>
          </Link>
          <Link to="/fourth">
            <li
              style={{ fontSize: "25px" }}
              className={`text_white mb-5 cursur_pointer ${colorblue4}`}
            >
              policy
            </li>
          </Link>
        </ul>
      </Col>
    </>
  );
};

export default AsideBar;
