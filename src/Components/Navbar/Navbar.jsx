import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.webp'
import logo_a from '../Assets/logo_a.webp'
import logo_n from '../Assets/logo_N.webp'
import logo_v from '../Assets/logo_v.webp'
import logo_s from '../Assets/logo_S.webp'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_n} alt="" />
        <img src={logo_v} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_s} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>shop {menu === "shop"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type1")}}>type1 {menu === "type1"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type2")}}>type2 {menu === "type2"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type3")}}>type3 {menu === "type3"? <hr />:<></>}</li>
      </ul>
      <div className='nav-logincart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar