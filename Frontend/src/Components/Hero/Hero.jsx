import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_images from '../Assets/images/pic_24.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
              <p>ON GOING SALE !! SHOP NOW 🛍️</p>
            <div className='hero-left-para'>
                  <p>Your life is your</p>

                <div className='hero-hand-icon'>
                    
                      <img src='https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_800,h_400/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F2%2F2016%2F09%2Fd0e776ae1dfdc3fbf526020d009e0c15da844b01.gif' alt="" />
                      <p>canvas</p>
                </div>
                  <p>and you are</p>
                  <p>the masterpiece.</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
              <img src='https://th-thumbnailer.cdn-si-edu.com/oX339hw9PpsFkuhQUzNms6bwXjE=/1000x750/filters:no_upscale():focal(640x640:641x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/3e/0b/3e0b2b4b-2b70-4309-a308-8bbf08360e94/national_gallery_of_the_faroe_islands_ai_exhibit_insprired_by_van_gogh.png' alt="" />
        {/* <img src={hero_images} alt="" /> */}
        </div>
    </div>
  )
}

export default Hero