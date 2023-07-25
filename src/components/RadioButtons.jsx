import React, { useState } from "react";
import { Container } from "react-bootstrap";

const RadioButtons = () => {
  const [, setShowList] = useState(false);
  const [userslect, setUserslect] = useState([]);
  const [dataSearch, setDataSearch] = useState("registration");
  const [dataPayment, setdataPayment] = useState("upi");
  const [users] = useState([
    {
      Name: "Shubham",
      Amount: "3000",
      paymentMode: "Cash",
      type: "registration",
    },
    {
      Name: "Mohit",
      Amount: "5000",
      paymentMode: "upi",
      type: "emi",
    },
    {
      Name: "Ashish",
      Amount: "9000",
      paymentMode: "upi",
      type: "registration",
    },
    {
      Name: "Abhishek",
      Amount: "2000",
      paymentMode: "upi",
      type: "emi",
    },
    {
      Name: "Naveen",
      Amount: "2000",
      paymentMode: "Cash",
      type: "emi",
    },
    {
      Name: "Sachin",
      Amount: "5000",
      paymentMode: "upi",
      type: "registration",
    },
    {
      Name: "Chirag",
      Amount: "7000",
      paymentMode: "Cash",
      type: "registration",
    },
    {
      Name: "Surender",
      Amount: "10000",
      paymentMode: "upi",
      type: "emi",
    },
    {
      Name: "Kunal",
      Amount: "6000",
      paymentMode: "card",
      type: "registration",
    },
  ]);
  const handleUserClick = (user) => {
    setUserslect((prevuserslect) => [...prevuserslect, user]);
    setDataSearch("");
  };
  const userOutput = users.filter(
    (user) =>
      !userslect.some((e) => e.id === user.id) &&
      user.type.includes(dataSearch) &&
      user.paymentMode.includes(dataPayment)
  );
  return (
    <div className="vh-100">
      <Container>
        <div>
          <div className="d-flex justify-content-center gap-5 mt-5">
            <div>
              <span className="me-3">Registration</span>
              <input
                value={dataSearch}
                onClick={() => setDataSearch("registration")}
                type="radio"
                name="type"
                id="registration"
              />
            </div>
            <div>
              <span className="me-3">Emi</span>
              <input
                value={dataSearch}
                onClick={() => setDataSearch("emi")}
                type="radio"
                name="type"
                id="emi"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 mt-5">
            <div>
              <span className="me-3">Cash</span>
              <input
                value={dataPayment}
                onClick={() => setdataPayment("Cash")}
                type="radio"
                name="mode"
                id="registration"
              />
            </div>
            <div>
              <span className="me-3">Upi</span>
              <input
                value={dataPayment}
                onClick={() => setdataPayment("upi")}
                type="radio"
                name="mode"
                id="emi"
              />
            </div>
            <div>
              <span className="me-3">Card</span>
              <input
                value={dataPayment}
                onClick={() => setdataPayment("card")}
                type="radio"
                name="mode"
                id="emi"
              />
            </div>
          </div>
          {userOutput.map((user) => (
            <div>
              {dataSearch !== "" && (
                <li
                  className=" d-flex align-items-center gap-3 px-1 py-1 rounded-2 mt-4 mb-3"
                  key={user.id}
                  onClick={() => {
                    handleUserClick(user);
                    setShowList(false);
                  }}
                >
                  <div className="row justify-content-between w-100">
                    <div className="col-2 bg-dark rounded-2 text-white py-2 my-1">
                      <h5 className=" text-capitalize text-white">
                        {user.Name}
                      </h5>
                    </div>
                    <div className="col-2 bg-dark rounded-2 text-white py-2 my-1">
                      <h5 className=" text-capitalize text-white">
                        {user.Amount}
                      </h5>
                    </div>
                    <div className="col-5 bg-dark rounded-2 text-white py-2 my-1">
                      <h5 className=" text-capitalize text-white">
                        {user.type}
                      </h5>
                    </div>
                    <div className="col-2 bg-dark rounded-2 text-white py-2 my-1">
                      <h5 className=" text-capitalize text-white">
                        {user.paymentMode}
                      </h5>
                    </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RadioButtons;
