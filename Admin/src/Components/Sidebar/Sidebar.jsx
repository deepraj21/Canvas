import './Sidebar.css'
import {Link} from 'react-router-dom';
import cart_icon from '../../Assets/cart_icon.png'
import product_list from '../../Assets/product_list.png'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addProduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
          <img src={cart_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listProduct'} style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={product_list} alt="" width={40} />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar