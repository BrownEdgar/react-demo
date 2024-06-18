import React from 'react'
import Slider from 'react-slick';
import './Slider.css';

const images = [
  { src: 'sliderImages/sld1.jpg', alt: 'Image 1' },
  { src: 'sliderImages/sld2.png', alt: 'Image 2' },
  { src: 'sliderImages/sld3.jpg', alt: 'Image 3' },

]

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent