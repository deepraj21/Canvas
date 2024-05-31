import './AddProduct.css'
import upload from '../../Assets/upload.jpg'
import { useState } from 'react'

const AddProduct = () => {
  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name : "",
    image: "",
    category: "Cotton",
    new_price:"",
    old_price:""
  })

  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_product = async () =>{
    console.log(productDetails)
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image = responseData.image_url;
      await fetch('http://localhost:4000/addProduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product Added"):alert("Failed")
      })
    }
  }

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product title</p>
        <input  value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type='number' name='old_price' placeholder='Type here' />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-preoduct-selector'>
          <option value="Cotton">Cotton</option>
          <option value="Linen">Linen</option>
          <option value="Stretched">Stretched</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Image</p>
        <label htmlFor="file-input">
          <img  src={image?URL.createObjectURL(image):upload} className='appproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>{Add_product()}} className='addproduct-btn'>ADD</button>

    </div>
  )
}

export default AddProduct