// import React from "react";
// import { useState } from "react";

// const SliderJsSection = () => {
//   const [tabActive, setTabActive] = useState(null);
//   const [first, setFirst] = useState(null);
//   const array = [
//     {
//       tab: "tab1",
//       desc: "this is my first tab desc",
//     },
//     {
//       tab: "tab2",
//       desc: "this is my second tab desc",
//     },
//     {
//       tab: "tab3",
//       desc: "this is my third tab desc",
//     },
//   ];
//   const onclicks = (i) => {
//     setTabActive(i);
//     setFirst(i);
//   };
//   return (
//     <div className="d-flex ">
//       {array.map((obj, i) => {
//         return (
//           <>
//             <h1
//               className={first === obj.desc ? "text-red" : "text-black"}
//               onClick={() => onclicks(obj.desc)}
//             >
//               {obj.tab}
//             </h1>
//           </>
//         );
//       })}
//       <h1>{tabActive}</h1>
//     </div>
//   );
// };

// export default SliderJsSection;
// import React, { useState } from "react";

// const TabsChange = () => {
//   const [first, setfirst] = useState(null);
//   const [hello, sethello] = useState(null);
//   const array = [
//     {
//       tab: "tab1",
//       desc: "this is my first tab ",
//     },
//     {
//       tab: "tab2",
//       desc: "this is my second tab ",
//     },
//     {
//       tab: "tab3",
//       desc: "this is my third tab ",
//     },
//   ];
//   const desct = (m) => {
//     setfirst(m);
//     sethello(m);
//   };
//   return (
//     <div>
//       <div>
//         {array.map((e) => {
//           return (
//             <h1
//               onClick={() => {
//                 desct(e.desc);
//               }}
//             >
//               {e.tab}
//             </h1>
//           );
//         })}
//       </div>
//       <div>{hello}</div>
//     </div>
//   );
// };

// export default TabsChange;
import React, { useState } from "react";

const TabsChange = () => {
  const [first, setfirst] = useState(null);
  const [second, setsecond] = useState(null);
  const array = [
    {
      tab: "tab1",
      desc: "this is my first tab",
    },
    {
      tab: "tab2",
      desc: "this is my second tab",
    },
    {
      tab: "tab3",
      desc: "this is my third tab",
    },
  ];
  const hello = (m) => {
    setfirst(m);
    setsecond(m);
  };
  return (
    <div>
      <div>
        {array.map((e) => {
          return (
            <h1
              className={first === e.desc ? "text-red" : ""}
              onClick={() => {
                hello(e.desc);
              }}
            >
              {e.tab}
            </h1>
          );
        })}
      </div>
      <h1>{second}</h1>
    </div>
  );
};

export default TabsChange;
