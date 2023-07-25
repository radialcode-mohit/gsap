import React, { useEffect, useState } from "react";

const Api = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((datastore) => setfirst(datastore))
      .catch((erroes) => console.log(erroes));
    console.log(first);
  }, []);

  return (
    <section>
      {first.map((data, i) => {
        return (
          <div key={data.id}>
            <img src={data.image} alt="" />
            <p>{data.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Api;
