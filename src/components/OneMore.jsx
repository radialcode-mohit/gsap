import React, { useState } from "react";
import img1 from "../assets/images/img/img1.png";
import img2 from "../assets/images/img/img2.png";

const Try = () => {
  const [peoples, setPeoples] = useState([
    { id: 1, name: "mohit", imgperon: img1 },
    { id: 3, name: "kumar", imgperon: img1 },
    { id: 2, name: "rahul", imgperon: img2 },
    { id: 4, name: "nishu", imgperon: img2 },
    { id: 5, name: "ashish", imgperon: img2 },
    { id: 6, name: "raj", imgperon: img2 },
    { id: 7, name: "raman", imgperon: img2 },
    { id: 8, name: "guman", imgperon: img2 },
  ]);

  const [selection, setSelection] = useState([]);
  const [personfind, sepersonfind] = useState("");
  const peopleFilter = peoples.filter(
    (m) => !selection.some((e) => e.id === m.id) && m.name.includes(personfind)
  );

  const onclickfunction = (s) => {
    setSelection((beforeuser) => [...beforeuser, s]);
    sepersonfind("");
  };
  const BodyClickFalse = () => {
    if (dropeActive === true) {
      setDropeActive(false);
    }
  };
  const hideTable = (Myind) => {
    setSelection(selection.filter((myvalue, i) => i !== Myind));
  };

  const [dropeActive, setDropeActive] = useState(false);

  return (
    <>
      <section onClick={BodyClickFalse} className=" vh-100">
        <div className=" container">
          <div>
            <div className=" position-relative">
              <input
                className=" border-2 border-dark-subtle w-100  m-4 p-2"
                onClick={() => {
                  setDropeActive(true);
                }}
                type="search"
                value={personfind}
                onChange={(e) => sepersonfind(e.target.value)}
                placeholder="Search"
              />
              {dropeActive && (
                <ul className="position-absolute w-75 start-50  mb-0 translate-middle-x  p-2 rounded-3 d-flex flex-column gap-3">
                  {peopleFilter.map((user) => (
                    <li
                      className=" d-flex  align-items-center gap-3 px-3 py-2 bg-body-secondary justify-content-between"
                      key={user.id}
                      onClick={() => {
                        onclickfunction(user);
                        setDropeActive(false);
                      }}
                    >
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={user.imgperon}
                        alt=""
                      />
                      <h5 className=" text-black text-capitalize mb-0">
                        {user.name}
                      </h5>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="d-flex w-75 overflow-x-scroll scrollnone">
              {selection.map((user, i) => (
                <div key={user.id}>
                  <div className="d-inline-block bg-secondary  mt-2  mx-4 ">
                    <div className=" d-flex gap-3 align-items-center px-2 py-2  ">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={user.imgperon}
                      />
                      <span
                        className=" cursur_pointer"
                        onClick={() => hideTable(i)}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Try;
