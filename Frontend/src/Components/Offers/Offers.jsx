import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/images/exclusive.jpg'

const Offers = () => {
  return (
      <div className='Offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
              <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
              <img src={exclusive_img} alt="" />
        </div>
      </div>
  )
}

export default Offers