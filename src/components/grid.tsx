'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '/Users/radhikapanchal/openai/corp/src/app/slide.css'; // Import the new CSS file

const CarouselComponent = () => {
  const firstRowQuestions = [
    'Write a text asking a friend to be my plus-one at a wedding ',
    'Test my knowledge on ancient civilizations',
    'Improve my essay writing ask me to outline my thoughts',
    'Tell me a fun fact about the Roman Empire',
    'Write a message that goes with a kitten gif for a friend on a rough day',
    'Help me study vocabulary for a college entrance exam',
  ];

  const secondRowQuestions = [
    'Write a Python script to automate sending daily email reports ',
    'Create a personal webpage for me after asking me three questions',
    'Create a morning routine to boost my productivity',
    'Plan a mental health day to help me relax',
    'Give me ideas about how to plan my New Years resolutions',
  ];

  const thirdRowQuestions = [
    'Quiz me on world capitals to enhance my geography skills ',
    'Design a programming game teach basics in a fun way',
    'Make a sandwich using ingredients from my kitchen',
    'Make up a story about Sharky, a tooth-brushing shark superhero',
    'Suggest fun activities to help me make friends in a new city',
  ];

  const [isPausedFirstRow, setIsPausedFirstRow] = useState(false);
  const [isPausedSecondRow, setIsPausedSecondRow] = useState(false);
  const [isPausedThirdRow, setIsPausedThirdRow] = useState(false);

  const handleMouseEnter = (setPaused: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    setPaused(true);
  };

  const handleMouseLeave = (setPaused: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    setPaused(false);
  };

  const settings = (isPaused: boolean) => ({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: !isPaused,
    swipe: !isPaused,
  });

  const secondRowSettings = (isPaused) => ({
    ...settings(isPaused),
    rtl: true,
  });

  return (
    <div className="carousel-container">
      <div
        onMouseEnter={() => handleMouseEnter(setIsPausedFirstRow)}
        onMouseLeave={() => handleMouseLeave(setIsPausedFirstRow)}
      >
        <Slider {...secondRowSettings(isPausedFirstRow)}>
          {firstRowQuestions.map((question, index) => (
            <div key={index} className="slick-slide">
              <div className="slide-content">
                {question}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <div
        onMouseEnter={() => handleMouseEnter(setIsPausedSecondRow)}
        onMouseLeave={() => handleMouseLeave(setIsPausedSecondRow)}
      >
        <Slider {...settings(isPausedSecondRow)}>
          {secondRowQuestions.map((question, index) => (
            <div key={index} className="slick-slide">
              <div className="slide-content">
                {question}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div
        onMouseEnter={() => handleMouseEnter(setIsPausedThirdRow)}
        onMouseLeave={() => handleMouseLeave(setIsPausedThirdRow)}
      >
        <Slider {...secondRowSettings(isPausedThirdRow)}>
          {thirdRowQuestions.map((question, index) => (
            <div key={index} className="slick-slide">
              <div className="slide-content">
                {question}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
