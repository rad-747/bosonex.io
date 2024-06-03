// components/CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/img1.webp", text: "Image 1 Text" },
  { src: "/img2.webp", text: "Image 2 Text" },
  { src: "/img1.webp", text: "Image 3 Text" },
  { src: "/img2.webp", text: "Image 4 Text" }
];

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container mb-11 max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative px-2 mb-10">
            <div className="max-w-md h-96 overflow-hidden relative rounded-md">
              <img src={image.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 text-black p-2 w-full box-border">
                {image.text}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
