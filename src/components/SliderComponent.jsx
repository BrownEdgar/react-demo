import React from 'react'
import Slider from 'react-slick';

const images = [
    { src: 'sld1.jpg', alt: 'Image 1' },
    { src: 'sld3.jpg', alt: 'Image 2' },
    { src: 'sld3.jpg', alt: 'Image 3' },
   
  ];
const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
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