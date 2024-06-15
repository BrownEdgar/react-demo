import React from 'react';
import "./Logo.css";

const Logo = () => {
  const logos = [...Array(18).keys()];


  return (
    <div className='Logo'>
      <div className='Logo__Title'>
        <h1>The world's leading brands choose ROOM.</h1>
        <p>Over 3,000 and counting.</p>
      </div>
      <div className='Logo__Section'>
        {logos.map((logo, index) => (
          <img key={index} src={`./src/assets/img/logo${index + 1}.png`} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};


export default Logo;
