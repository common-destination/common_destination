import React, { useRef, useEffect } from "react";
import images from "../../functions/images.js";

function CityImages({passengers}) {
  const refBgImages = useRef(null);

  const arrImages = [
    images.Amsterdam,
    images.Athens,
    images.Barcelona,
    images.Berlin,
    images.Brussels,
    images.Budapest,
    images.Copenhagen,
    images.Dublin,
    images.Dusseldorf,
    images.Frankfurt,
    images.Hamburg,
    images.Helsinki,
    images.Istanbul,
    images.Lisbon,
    images.London,
    images.Mallorca,
    images.Milan,
    images.Moscow,
    images.Munich,
    images.Oslo,
    images.Paris,
    images.Prague,
    images.Rome,
    images.SaintPetersburg,
    images.Stockholm,
    images.Stuttgart,
    images.Vienna,
    images.Warsaw,
    images.Zurich,
  ];

  const randomImages = Math.floor(Math.random() * arrImages.length);
  const selectedImages = arrImages[randomImages];

  useEffect(() => {
    refBgImages.current.style.backgroundImage = `url(${selectedImages})`;

    let bgPosition = () => {
      switch (selectedImages) {
        case images.Amsterdam:
          return "center center";
        case images.Athens:
          return "center center";
        case images.Barcelona:
          return "center center";
        case images.Berlin:
          return "center center";
        case images.Brussels:
          return "center center";
        case images.Budapest:
          return "center center";
        case images.Copenhagen:
          return "center center";
        case images.Dublin:
          return "center center";
        case images.Dusseldorf:
          return "center center";
        case images.Frankfurt:
          return "center center";
        case images.Hamburg:
          return "center center";
        case images.Helsinki:
          return "center center";
        case images.Istanbul:
          return "center center";
        case images.Lisbon:
          return "center center";
        case images.London:
          return "center center";
        case images.Mallorca:
          return "center center";
        case images.Milan:
          return "center center";
        case images.Moscow:
          return "center center";
        case images.Munich:
          return "center center";
        case images.Oslo:
          return "center center";
        case images.Paris:
          return "center center";
        case images.Prague:
          return "center center";
        case images.Rome:
          return "center center";
        case images.SaintPetersburg:
          return "center center";
        case images.Stockholm:
          return "center center";
        case images.Stuttgart:
          return "center center";
        case images.Vienna:
          return "center center";
        case images.Warsaw:
          return "center center";
        case images.Zurich:
          return "center center";
        default:
          return "center center";
      }
    };
    refBgImages.current.style.bgPosition = bgPosition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passengers]);

  return <div className="images" ref={refBgImages}></div>;
}

export default CityImages;
