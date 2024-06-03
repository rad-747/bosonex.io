// 'use client';
// import React from 'react';
// import Slider from 'react-slick';
// import '/Users/radhikapanchal/openai/corp/src/app/newcc.css';
// import { MdRoundedCorner } from 'react-icons/md';

// const CarouselComponent = () => {
// const settings = {
//   arrows: false,
//   dots: false,
//   infinite: true,
//   speed: 700,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   MdRoundedCorner: true,
//   fade: true,
//   vertical: true,
//   cssEase: 'linear',
// };

// return (
//   <div className="carousel-container rounded-md ">
//     <Slider {...settings}>
//       <div className='card custom-fade rounded-md'>
//         <img src="/krafton.png" alt="Amplifier 1" className='rounded-md' />
//         <div className='card-body rounded-md'>
//         </div>
      
//       </div>
//       <div className="card custom-fade rounded-md">
//         <img src="/shopify-logo.png" alt="Amplifier 2" className='rounded-md' />
//         <div className='card-body rounded-md'>
//         </div>
        
//       </div>
//       <div className='card custom-fade rounded-md'>
//         <img src="/zendesk.png" alt="Amplifier 3" className='rounded-md' />
//         <div className='card-body rounded-md'></div>
        
//       </div>
//     </Slider>
//   </div>
// );
// };

// export default CarouselComponent;


// import type { StaticImageData } from "next/image";
// import Image from 'next/image';

// interface HeroProps {
// imgalt: string;
// imgdata: StaticImageData;
// title: string;
// }
// src/components/CarouselComponent.js
// CarouselComponent.tsx
// CarouselComponent.js
// CarouselComponent.js
'use client';
// CarouselComponent.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import '/Users/radhikapanchal/openai/corp/src/app/newcc.css'; // Import the CSS file

const CarouselComponent = ({ id, autoplaySpeed }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed, // Use the autoplaySpeed prop here
    vertical: true,
    beforeChange: (current: any, next: React.SetStateAction<number>) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className="carousel-container rounded-md mx-4">
      <Slider {...settings}>
        <div className={`card rounded-md ${currentSlide === 0 ? 'slick-current' : ''}`}>
          <img src="/krafton.png" alt="Amplifier 1" className="rounded-md" />
          <div className="card-body rounded-md">
            <h3>Slide 1 Content</h3>
            <p>Description of slide 1</p>
          </div>
        </div>
        <div className={`card rounded-md ${currentSlide === 1 ? 'slick-current' : ''}`}>
          <img src="/shopify-logo.png" alt="Amplifier 2" className="rounded-md" />
          <div className="card-body rounded-md">
            <h3>Slide 2 Content</h3>
            <p>Description of slide 2</p>
          </div>
        </div>
        <div className={`card rounded-md ${currentSlide === 2 ? 'slick-current' : ''}`}>
          <img src="/zendesk.png" alt="Amplifier 3" className="rounded-md" />
          <div className="card-body rounded-md">
            <h3>Slide 3 Content</h3>
            <p>Description of slide 3</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
