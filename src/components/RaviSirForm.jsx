import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const RaviSirForm = () => {
  const values = {
    eventname: "",
    date: "",
    time: "",
    location: "",
    value: "",
    checked: false,
    textarea: "",
    password: "",
    reEnterPass: "",
  };
  const [addDesc, setAddDesc] = useState(false);
  const [formData, setFormData] = useState(values);
  const [error, setError] = useState(false);
  // const [showPass, setShowPass] = useState(false);
  const submitButton = (e) => {
    e.preventDefault();
    formData.checked = false;
    if (
      formData.eventname &&
      formData.date &&
      formData.time &&
      formData.location &&
      formData.password &&
      formData.reEnterPass &&
      formData.password === formData.reEnterPass
    ) {
      console.log(formData);
      setFormData(values);
    } else {
      setError(true);
    }
    setAddDesc(false);
  };
  return (
    <section>
      <Container>
        <form
          onSubmit={(e) => {
            submitButton(e);
          }}
        >
          {/* event name -------------------- */}
          <label htmlFor="eventname">Event name</label>
          <div className=" bg-light mt-3">
            <input
              type="text"
              onChange={(e) => {
                setFormData({ ...formData, eventname: e.target.value });
              }}
              id="eventname"
              placeholder="Enter event name"
              className="w-75"
              value={formData.eventname}
            />
            <span
              className="p-2 cursur_pointer border_desc"
              onClick={() => {
                setAddDesc(true);
              }}
            >
              Add description
            </span>
            {formData.eventname === "" && error && (
              <p>please write Eventname</p>
            )}
          </div>
          <textarea
            onChange={(e) => {
              setFormData({ ...formData, textarea: e.target.value });
            }}
            value={formData.textarea}
            className={addDesc ? "d-block" : "d-none"}
            cols="30"
            rows="5"
          ></textarea>

          <Row>
            {/* date --------------------------- */}
            <Col lg={4}>
              <label htmlFor="date">date</label>
              <div className=" bg-light mt-3">
                <input
                  type="date"
                  onChange={(e) => {
                    setFormData({ ...formData, date: e.target.value });
                  }}
                  id="date"
                  value={formData.date}
                />
                {formData.date === "" && error && <p>please write date</p>}
              </div>
            </Col>
            {/* time--------------------------- */}
            <Col lg={4}>
              <label htmlFor="time">time</label>
              <div className=" bg-light mt-3">
                <input
                  type="time"
                  onChange={(e) => {
                    setFormData({ ...formData, time: e.target.value });
                  }}
                  id="time"
                  value={formData.time}
                />
                {formData.time === "" && error && <p>please write time</p>}
              </div>
            </Col>
          </Row>
          {/* loaction  */}
          <label htmlFor="location">location</label>
          <div className=" bg-light mt-3">
            <input
              list="data"
              className="w-75"
              id="location"
              value={formData.location}
              onChange={(e) => {
                setFormData({ ...formData, location: e.target.value });
              }}
            />
            <datalist id="data">
              <option>hisar</option>
              <option>delhi</option>
              <option>gurugram</option>
              <option>noida</option>
              <option>hansi</option>
            </datalist>
            <span className="p-2 cursur_pointer border_desc">
              Set Meeting Room
            </span>
            {formData.location === "" && error && <p>please fill location</p>}
          </div>
          {/* add guest  */}

          {/* <input
            type="checkbox"
            onClick={() => setShowPass(!showPass)}
            checked={formData.checked}
            onChange={(e) => {
              setFormData({ ...formData, checked: e.target.checked });
            }}
          />
          <input
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            type={showPass ? "text" : "password"}
            placeholder="pass"
          />
          <input
            value={formData.reEnterPass}
            onChange={(e) => {
              setFormData({ ...formData, reEnterPass: e.target.value });
            }}
            type={showPass ? "text" : "password"}
            placeholder=" chk pass"
          /> */}
          <button>Create Event</button>
        </form>
      </Container>
    </section>
  );
};

export default RaviSirForm;
