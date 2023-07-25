import React, { useState } from "react";
import img5 from "../assets/images/img/img1.png";
import img6 from "../assets/images/img/img2.png";
import img7 from "../assets/images/img/img3.png";
const Guest = () => {
  const imgArr = [
    {
      id: "groundFloor",
      image: img5,
    },
    {
      id: "firstFloor",
      image: img6,
    },
    {
      id: "secondFloor",
      image: img7,
    },
  ];
  const [open, setOpen] = useState(null);
  const [showImage, setShowImage] = useState({
    showImageNow: true,
    showImageId: null,
  });
  const { showImageNow, showImageId } = showImage;
  const OpenImage = (a) => {
    setOpen(a.image);
    setShowImage({
      showImageNow: !showImageNow,
      showImageId: a.id,
    });
  };
  return (
    <div>
      {imgArr.map((a, i) => (
        <div key={i}>
          <button onClick={() => OpenImage(a)} className="ground">
            {a.id}
          </button>
          <br />
          {showImageNow && showImageId === a.id ? (
            <img src={open} alt={a.id} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Guest;
