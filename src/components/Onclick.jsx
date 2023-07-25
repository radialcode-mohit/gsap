import React, { useState } from "react";
const Onclick = () => {
  const [first, setfirst] = useState(0);
  return (
    <section>
      <div className="d-flex justify-content-between">
        <p className={first === 1 ? "red" : ""}>lorem</p>
        <p className={first === 2 ? "blue" : ""}>lorem</p>
        <p className={first === 3 ? "green" : ""}>lorem</p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => {
            setfirst(1);
          }}
        >
          red
        </button>
        <button
          onClick={() => {
            setfirst(2);
          }}
        >
          blue
        </button>
        <button
          onClick={() => {
            setfirst(3);
          }}
        >
          green
        </button>
      </div>
    </section>
  );
};

export default Onclick;
