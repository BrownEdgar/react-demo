import React from 'react'
import './Poster.css'
const Poster = () => {
  return (
    <div className='Poster'>
        <img className='Poster__img' src="header.jpg" alt="" />
        <div className="Poster__txt">
  <div className="left-text">
    <h3>Design that inspires a better way to work.</h3>
  </div>
  <div className="right-text">
    <p>We've developed a series of purpose-built rooms that offer companies looking for change an affordable, sustainable, and flexible alternative to fixed construction and traditional office design.</p>
  </div>
</div>
    </div>
  )
}

export default Poster