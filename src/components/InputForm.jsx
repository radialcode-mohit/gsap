import React, { useState } from "react";

const InputForm = () => {
  const [gender, setgender] = useState();
  const [optionvalue, setoptionvalue] = useState();
  const [first, setfirst] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputdata = (e) => {
    const { name, value } = e.target;
    setfirst({ ...first, [name]: value });
  };
  const onsubmitform = (e) => {
    e.preventDefault();
    setfirst({ name: "", email: "", password: "" });
    console.log(first);
    console.log(gender);
    console.log(optionvalue);
  };

  return (
    <section>
      <form onSubmit={onsubmitform}>
        <p className=" mb-0 ">name:</p>
        <input
          type="text"
          name="name"
          value={first.name}
          onChange={inputdata}
        />
        <p className=" mb-0 ">lastname:</p>
        <input
          type="text"
          name="email"
          value={first.email}
          onChange={inputdata}
        />
        <p className=" mb-0 ">password:</p>
        <input
          type="text"
          name="password"
          value={first.password}
          onChange={inputdata}
        />
        <input
          type="radio"
          value="male"
          name="gender"
          checked={gender === "male"}
          onChange={(e) => setgender(e.target.value)}
          className=" ms-4"
        />
        male
        <input
          type="radio"
          value="female"
          t
          name="gender"
          checked={gender === "female"}
          onChange={(e) => setgender(e.target.value)}
          className=" ms-4"
        />
        female
        <select name="select" onChange={(e) => setoptionvalue(e.target.value)}>
          <option>mohit</option>
          <option value="ashish">ashish</option>
          <option value="jony">jony</option>
        </select>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default InputForm;
