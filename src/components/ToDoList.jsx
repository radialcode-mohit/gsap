import React, { useState } from "react";
import { Container } from "react-bootstrap";

const ToDoList = () => {
  const [todolist, setToDoList] = useState({ name: "" });
  //   const [dataprint, setDataPrint] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todolist.name.trim() !== "") {
      console.log(todolist.name);
      //   setToDoList({ name: "" });
      //   setDataPrint([...dataprint, { name2: todolist.name }]);
    }
  };

  //   const hidename = (i) => {
  //     setDataPrint(dataprint.filter((_, index) => index !== i));
  //   };
  return (
    <section className="min-vh-100">
      <Container>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setToDoList({ ...todolist, name: e.target.value });
            }}
            value={todolist.name}
            className="w-100 border-0 my-5"
          />
          <button className="btn btn-primary">add</button>
        </form>
        {/* {dataprint.map((data, e) => {
          return (
            <div className="d-flex justify-content-between pt-4">
              <p className="text-white">{data.name2}</p>
              <button
                onClick={() => {
                  hidename(e);
                }}
                className="btn btn-primary"
              >
                remove
              </button>
            </div>
          );
        })} */}
      </Container>
    </section>
  );
};

export default ToDoList;
