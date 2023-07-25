import React, { useState } from "react";
import firstimg from "../assets/images/img/firstsecmainimg.png";
import second from "../assets/images/img/fivestar.png";
import third from "../assets/images/img/img.png";
import fourth from "../assets/images/img/second.png";

const ImageSlide = () => {
  const [first, setfirst] = useState(0);
  const [images, setimages] = useState([firstimg, second, third, fourth]);

  return (
    <section>
      <div>
        <img src={images[first]} alt="firstimg" />
      </div>
      <button
        onClick={() => {
          if (first > 0) setfirst(first - 1);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          if (first < images.length - 1) setfirst(first + 1);
        }}
      >
        next
      </button>
    </section>
  );
};

export default ImageSlide;
