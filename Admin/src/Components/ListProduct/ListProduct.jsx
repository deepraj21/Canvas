import { useState,useEffect } from 'react'
import './ListProduct.css'
import cross from '../../Assets/cart_cross_icon.png'

const ListProduct = () => {

  const [allProducts,setAllProducts] = useState([]);
  
  const fetchInfo = async () => {
    await fetch('https://canvas-backend-vgcc.onrender.com/allProducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
  } 

  useEffect(()=>{
    fetchInfo();
  })

  const removeProduct = async (id)=>{
    await fetch('https://canvas-backend-vgcc.onrender.com/deleteProduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='ListProduct'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
       
        {allProducts.map((product,index)=>{
          return <>
           <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className='listproduct-product-icon' />
            <p>{product.name}</p>
            <p>₹{product.old_price}</p>
            <p>₹{product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{removeProduct(product.id)}} className='listprdoduct-remove-icon' src={cross} alt="" />
          </div>
           <hr />
          </>
        })}
      </div>

    </div>
  )
}

export default ListProduct