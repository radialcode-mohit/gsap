import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AsideBar from "./components/AsideBar";
// import { Route, Routes } from "react-router-dom";
// import Second from "./components/Second";
// import Third from "./components/Third";
// import Fourth from "./components/Fourth";
// import First from "./components/First";
// import { useState } from "react";
import FilterClasses from "./components/FilterClasses";
import RadioButtons from "./components/RadioButtons";
import Radio from "./components/Radio";
import GsapPraactice from "./components/GsapPraactice";
import GsapHeroSec from "./components/GsapHeroSec";
import Sun from "./components/Sun";

function App() {
  // const [first, setfirst] = useState(false);
  // const toggle = () => {
  //   setfirst(!first);
  // };
  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={<First toogle={toggle} frst={first} setfrst={setfirst} />}
        ></Route>
        <Route
          path="/second"
          element={<Second toogle={toggle} frst={first} setfrst={setfirst} />}
        ></Route>
        <Route
          path="/third"
          element={<Third toogle={toggle} frst={first} setfrst={setfirst} />}
        ></Route>
        <Route
          path="/fourth"
          element={<Fourth toogle={toggle} frst={first} setfrst={setfirst} />}
        ></Route>
      </Routes> */}
      {/* <FilterClasses /> */}
      {/* <Radio /> */}
      {/* <RadioButtons /> */}
      {/* <GsapPraactice /> */}
      {/* <GsapHeroSec /> */}
      <div className="overflow-x-hidden">
        <Sun />
      </div>
    </>
  );
}

export default App;
