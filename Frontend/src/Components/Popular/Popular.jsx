import React, { useState, useEffect } from 'react'
import './Popular.css'
import Item from '../Item/Item';

const Popular = () => {
  const [polpularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch('https://canvas-backend-vgcc.onrender.com/popularitems').then((res) => res.json()).then((data) => setPopularProduct(data));
  }, []);
  return (
    <div className='popular'>
      <p>POPULAR COLLECTION</p>
      <hr />
      <div className="popular-item">
        {polpularProduct.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular