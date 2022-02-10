import React from "react";
import { useRef, useEffect } from "react";
import img0 from "../../assets/images/airport-min1.jpg";
import img1 from "../../assets/images/airport1-min.jpg";
import img2 from "../../assets/images/airport2-min.jpg";
import img3 from "../../assets/images/airport3-min.jpg";
import img4 from "../../assets/images/airport4-min.jpg";

function RandomImages({ className }) {
  const refAppBg = useRef(null);
  const pictureArray = [img0, img1, img2, img3, img4];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const selectedPicture = pictureArray[randomIndex];
  console.log(randomIndex);
  useEffect(() => {
    // console.log(selectedPicture);
    refAppBg.current.style.backgroundImage = `url(${selectedPicture})`;

    refAppBg.current.style.backgroundPosition =
      (selectedPicture === img0 && "30% 50%") ||
      (selectedPicture === img1 && "center center");
  }, [selectedPicture]);

  return <div className={className} ref={refAppBg}></div>;
}
export default RandomImages;
