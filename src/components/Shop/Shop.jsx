import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './shop.css'
const Shop = () => {

    const [cart,setCart] = useState([])


    const handleProduct = (product)=>{
        console.log(product);
        const newCart = [...cart,product]
        setCart(newCart)
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
                products.map(product=><Product 
                    key={product.id} 
                    product={product}
                    handleProduct={handleProduct}
                    ></Product>)
               }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
           
            </div>
          
        </div>
    );
};

export default Shop;