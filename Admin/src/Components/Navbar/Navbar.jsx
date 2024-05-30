import logo from '../../Assets/logo.webp'
import logo_a from '../../Assets/logo_a.webp'
import logo_n from '../../Assets/logo_N.webp'
import logo_v from '../../Assets/logo_v.webp'
import logo_s from '../../Assets/logo_S.webp'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_n} alt="" />
        <img src={logo_v} alt="" />
        <img src={logo_a} alt="" />
        <img src={logo_s} alt="" />
      </div>
    </div>
  )
}

export default Navbar