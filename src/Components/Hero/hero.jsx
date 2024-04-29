import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon-removebg-preview.png'
import arrow from '../Assets/arrow-removebg-preview.png'
import fashion from '../Assets/e-girl-fashion-style-removebg-preview.png'
const hero = () => {
  return (
    <div className='Hero'>
      <div className="class-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="class-right">
        <img src={fashion} alt="" />
      </div>
    </div>
  )
}

export default hero
