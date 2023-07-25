import React, { useState } from "react";
const MapinsideMap = () => {
  const [textValue, setTextValue] = useState([
    {
      text: "Hello",
      btn: [
        {
          btnText: "plant",
        },
        {
          btnText: "trees",
        },
      ],
    },
  ]);
  return (
    <>
      <section>
        <div className="container py-4">
          {textValue.map((obj) => {
            return (
              <div className=" border m-2 ">
                <h1>{obj.text}</h1>
                {obj.btn &&
                  obj.btn.map((secondarray) => (
                    <button className="btn border m-2">
                      {secondarray.btnText}
                    </button>
                  ))}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MapinsideMap;
