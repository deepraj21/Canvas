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
        fetch('http://localhost:4000/allProducts').then((response) => response.json()).then((data) => setAll_Product(data))
    },[])

    

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
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