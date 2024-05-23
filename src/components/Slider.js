import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImages = () => {
  const images = [
    {
      image: require("./images/pexels-victorfreitas-703008.jpg"),
    },
    {
      image: require("./images/pexels-usman-yousaf-708951-5589941.jpg"),
    },
    {
      image: require("./images/pexels-towfiqu-barbhuiya-3440682-9797029.jpg"),
    },
    {
      image: require("./images/pexels-rehanverma-2275222.jpg"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      style={{
        width: "100%" /* Adjust the width as needed */,
        height: "500px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {images.map((i, index) => (
          <div key={index}>
            <img
              src={i.image}
              alt={`Slide ${index}`}
              style={{
                borderBottomLeftRadius: "30px",
                width: "95%",
                height: "450px",
                borderRadius: "30px",
                objectFit: "fill",
                margin: "auto",
                overflow: "hidden",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImages;
