import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res=>res.json())
         .then(data=>setProducts(data))
    },[])
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product=><Product key={product.id} product={product}></Product>)
               }
            </div>
            <div className='cart-container'>
            Order summery
            </div>
        </div>
    );
};

export default Shop;