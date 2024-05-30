import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext} from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
      <div className='CartItems'>
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {products.map((e)=>{
          if (cartItems[e.id]>0){
            return <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />

            </div>
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitem-total-item">
                <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cartitem-promocode">
            <p>If you have a promocode, Enter it Here</p>
            <div className="cart-iem-promobox">
              <input type="text" placeholder='Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartItems