import React, { useState } from "react";

const InputFormData = () => {
  const [myformData, setMyformData] = useState({
    fullname: "",
    age: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setMyformData({ ...myformData, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setMyformData({
      fullname: "",
      age: "",
    });
    console.log(myformData);
  };
  return (
    <React.Fragment>
      <form onSubmit={formSubmit}>
        <label htmlFor="MyName">Name</label>
        <input
          id="MyName"
          name="fullname"
          onChange={handleInput}
          value={myformData.fullname}
          type="text"
          placeholder="Enter Your Name"
        />
        <label htmlFor="MyAge">Age</label>

        <input
          type="number"
          id="MyAge"
          name="age"
          value={myformData.age}
          onChange={handleInput}
          placeholder="Enter Your Age"
        />

        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
};

export default InputFormData;
