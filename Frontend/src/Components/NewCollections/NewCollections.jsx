import React, { useEffect, useState } from 'react'
import './NewCollections.css';
// import data_product from '../Assets/data';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection, setNewCollection] = useState([]);
  useEffect(() => {
    console.log(new_collection)
    fetch('http://localhost:4000/newcollection').then((response) => response.json()).then((data) => setNewCollection(data));
  }, [])
  return (
    <div className='newcollections'>
      <p>NEW COLLECTIONS</p>
      <hr />
      <div className="collections">
        {
          new_collection.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default NewCollections