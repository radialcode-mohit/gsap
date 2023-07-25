import React, { useState } from "react";
import { Container } from "react-bootstrap";

const DropDown = () => {
  const mydata = ["red", "black", "green"];
  const [first, setfirst] = useState(mydata);
  const [dropdown, setdropdown] = useState(false);
  return (
    <section>
      <Container>
        <div className="">
          <button className="btn btn-primary py-3 px-4">dropdown</button>
          <div>
            {first.map((val) => {
              return <h1>{val.mydata}</h1>;
            })}
          </div>
          {dropdown ? val : true}63
        </div>
      </Container>
    </section>
  );
};

export default DropDown;
