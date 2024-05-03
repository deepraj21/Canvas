import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.webp'
import logo_a from '../Assets/logo_a.webp'
import logo_n from '../Assets/logo_N.webp'
import logo_v from '../Assets/logo_v.webp'
import logo_s from '../Assets/logo_S.webp'
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
          <Link to="/">
              <div className='footer-logo'>
                  <img src={logo} alt="" />
                  <img src={logo_a} alt="" />
                  <img src={logo_n} alt="" />
                  <img src={logo_v} alt="" />
                  <img src={logo_a} alt="" />
                  <img src={logo_s} alt="" />
              </div>
          </Link>
          <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icons">
            <div className="footer-icon-container">
                  <img src={instagram_icon} alt="" /> 
            </div>
              <div className="footer-icon-container">
                  <img src={whatsapp_icon} alt="" />
              </div>
              <div className="footer-icon-container">
                  <img src={pintrest_icon} alt="" />
              </div>     
          </div>
          <div className="fooer-copyright">
              <hr />
              <p>Copyright @ 2024 - All Rights Reserved</p>

          </div>
    </div>
  )
}

export default Footer