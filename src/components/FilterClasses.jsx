import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FilterClasses = () => {
  const classData = [
    { class: "1", name: "kans" },
    { class: "2", name: "dhuryodhan" },
    { class: "3", name: "arjun" },
    { class: "3", name: "karan" },
    { class: "2", name: "pandav" },
    { class: "1", name: "bhim" },
    { class: "2", name: "nakul" },
    { class: "3", name: "sehdev" },
    { class: "1", name: "yudishter" },
    { class: "2", name: "shankuni" },
    { class: "3", name: "krishan" },
  ];
  const [first, setfirst] = useState(classData);
  const firstClassData = () => {
    const firstclass = classData.filter((classData) => classData.class === "1");
    setfirst(firstclass);
  };
  const secondClassData = () => {
    const secondclass = classData.filter(
      (classData) => classData.class === "2"
    );
    setfirst(secondclass);
  };
  const thirdClassData = () => {
    const thirdclass = classData.filter((classData) => classData.class === "3");
    setfirst(thirdclass);
  };

  return (
    <section className="d-flex min-vh-100 justify-content-center">
      <Container className="mt-5 pt-5">
        <div className="d-flex justify-content-center">
          <button onClick={firstClassData} className="btn btn-primary p-5 ">
            1
          </button>
          <button
            onClick={secondClassData}
            className="btn btn-primary p-5 mx-5"
          >
            2
          </button>
          <button onClick={thirdClassData} className="btn btn-primary p-5 ">
            3
          </button>
        </div>
        <div className="d-flex justify-content-center gap-5 mt-5">
          <div>
            <p className="text-white pb-4">class</p>
            {first.map((classData) => (
              <li className="text-white">{classData.class}</li>
            ))}
          </div>
          <div>
            <p className="text-white pb-4">name</p>
            {first.map((classData) => (
              <li className="text-white">{classData.name}</li>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FilterClasses;
