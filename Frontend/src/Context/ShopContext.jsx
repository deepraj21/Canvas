import React, { createContext, useEffect, useState } from "react";
// import products from '../Components/Assets/product'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems, setCartItem] = useState(getDefaultCart());

    // console.log(cartItem);

    const [products,setAll_Product] = useState([]);

    useEffect(()=>{
        fetch('https://canvas-backend-vgcc.onrender.com/allProducts').then((response) => response.json()).then((data) => setAll_Product(data))
        if(localStorage.getItem('auth-token')){
            fetch('https://canvas-backend-vgcc.onrender.com/getcart',{
                method:'POST',
                headers:{
                    'Accept':'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItem((data))
                
            )
        }
    },[])

    

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://canvas-backend-vgcc.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    'Accept':'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    itemId:itemId
                })
            }).then((response)=>response.json()).then((data)=>console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(localStorage.getItem('auth-token')){
            fetch('https://canvas-backend-vgcc.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    'Accept':'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    itemId:itemId
                })
            }).then((response)=>response.json()).then((data)=>console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems,getTotalCartAmount,products, cartItems ,addToCart,removeFromCart};

    
    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;