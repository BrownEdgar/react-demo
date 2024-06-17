import React from 'react'
import './Slider.css';

const SectionComponent = () => {
  return (

    <div className='SectionComponent'>
 <div className='SectionComponent__h2' >
    <h2>Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.
   </h2>
 </div>
<div className="SectionComponent__cards">
    <div className="SectionComponent__card">
        <img className='SectionComponent__img' src="sliderImages/cost-effective.jpg" alt="cost-effective" />
        <h2>Cost-effective</h2>
        <p>At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.</p>
    </div>
    <div className="SectionComponent__card">
    <img src="sliderImages/time-saving.jpg" alt="time-saving" />
    <h2>Time Saving</h2>
    <p>Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more.</p>
    </div>
    <div className="SectionComponent__card">
        <img src="sliderImages/flexbie.jpg" alt="flexbie" />
        <h2>Flexible</h2>
        <p>Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location.</p>
    </div>
</div>

    </div>
  )
}

export default SectionComponent