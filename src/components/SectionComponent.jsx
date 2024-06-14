import React from 'react'

const SectionComponent = () => {
  return (

    <div className='SectionComponent'>
 <div className='SectionComponent__h2' >
    <h2>Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.
   </h2>
 </div>
<div className="SectionComponent__cards">
    <div className="SectionComponent__card">
        <img src="cost-effective.jpg" alt="cost-effective" />
        <p>Cost-effective</p>
        <span>At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.</span>
    </div>
    <div className="SectionComponent__card">
    <img src="time-saving.jpg" alt="time-saving" />
    <p>Time Saving</p>
    <span>Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more.</span>
    </div>
    <div className="SectionComponent__card">
        <img src="flexbie.jpg" alt="flexbie" />
        <p>Flexible</p>
        <span>Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location.</span>
    </div>
</div>

    </div>
  )
}

export default SectionComponent