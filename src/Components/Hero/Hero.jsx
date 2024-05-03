import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_images from '../Assets/images/pic_24.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
              <p>New Arrival Only</p>
            <div className='hero-left-para'>
                <div className='hero-hand-icon'>
                    
                    <img src={hand_icon} alt="" />
                    <p>new</p>
                </div>
                <p>collections</p>
                <p>for evryone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_images} alt="" />
        </div>
    </div>
  )
}

export default Hero