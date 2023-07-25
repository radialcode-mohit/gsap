import React from "react";

const FormData = () => {
  //   const [first, setFirst] = useState(true);
  //   const [second, setSecond] = useState(true);
  const datastore = (e) => {
    e.preventDefault();
    const firstinput = e.target.fname.value;
    const secondinput = e.target.lname.value;

    console.log("firstname:" + firstinput, "secondname:" + secondinput);
  };
  //   const checkboxvalue = (data) => {
  //     if ((data = "first")) {
  //       if (first == true) {
  //         console.log(data, "firstcheckbox");
  //       }
  //       setFirst(!first);
  //     }
  //     if ((data = "second")) {
  //       if (second == true) {
  //         console.log(data, "secondcheckbox");
  //       }
  //       setSecond(!second);
  //     }
  //   };
  return (
    <div>
      <form onSubmit={datastore}>
        <input type="text" name="fname" placeholder="firstname" />
        <input type="text" name="lname" placeholder="lastname" />
        <button>submit</button>
      </form>
      {/* <input
        type="checkbox"
        value={first}
        onChange={() => checkboxvalue("first")}
        className=" ms-4"
      />
      <input
        type="checkbox"
        value={second}
        onChange={() => checkboxvalue("second")}
        className=" ms-4"
      /> */}
    </div>
  );
};

export default FormData;
