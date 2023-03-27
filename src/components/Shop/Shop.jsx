import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {

    const [cart,setCart] = useState([])


    const handleProduct = (product)=>{
        // const newCart = [...cart,product]
        // console.log(product,cart);
        // setCart(newCart)
        console.log(product);
    }
    

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res=>res.json())
         .then(data=>setProducts(data))
    },[]);
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product=><Product key={product.id} product={product} handleProduct={handleProduct}></Product>)
               }
            </div>
            <div className='cart-container'>
               Order summery
            <p>Selected item:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;