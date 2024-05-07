import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderImages = () => {
  const images = [
    {
      image: require("./images/pexels-victorfreitas-703008.jpg")
    },
    {
      image: require("./images/pexels-usman-yousaf-708951-5589941.jpg")
    },
    {
      image: require("./images/pexels-towfiqu-barbhuiya-3440682-9797029.jpg")
    },
    {
      image: require("./images/pexels-rehanverma-2275222.jpg")
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((i, index) => (
          <div key={index} className='image-container'>
            <img src={i.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImages;
