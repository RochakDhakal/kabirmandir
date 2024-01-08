import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide1 } from './Slides/Slide1';
import Slide2 from './Slides/Slide2';

const CarouselSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line
    autoplaySpeed: 2000, // Adjust the speed as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='w-full overflow-x-hidden'>
      <div className='w-full'>
        <h3><Slide1/></h3>
      </div>
      <div className='w-full'>
        <h3><Slide2/></h3>
      </div>
    </Slider>
  );
};

export default CarouselSlider;
