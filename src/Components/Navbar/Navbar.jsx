import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.webp'
import logo_a from '../Assets/logo_a.webp'
import logo_n from '../Assets/logo_N.webp'
import logo_v from '../Assets/logo_v.webp'
import logo_s from '../Assets/logo_S.webp'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const { getTotalCartItems }  = useContext(ShopContext);
  return (
    <div className='Navbar'>
      <Link to="/">
         <div className='nav-logo'>
        <img src={logo} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_n} alt="" />
        <img src={logo_v} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_s} alt="" />
      </div>
      </Link>
     
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">shop</Link> {menu === "shop"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type1")}}><Link style={{textDecoration: 'none'}} to="/type1">type1</Link> {menu === "type1"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type2")}}><Link style={{textDecoration: 'none'}} to="/type2">type2</Link>  {menu === "type2"? <hr />:<></>}</li>
        <li onClick={()=>{setMenu("type3")}}><Link style={{textDecoration: 'none'}} to="/type3">type3</Link>  {menu === "type3"? <hr />:<></>}</li>
      </ul>
      <div className='nav-logincart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar