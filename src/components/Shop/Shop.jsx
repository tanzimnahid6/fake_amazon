import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
import { deleteShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FaArrowRight} from "react-icons/fa";



const Shop = () => {
    const [cart,setCart] = useState([])

    const handleProduct = (product)=>{
        const newCart = [...cart,product]
        setCart(newCart)

        addToDb(product.id)
    }
    
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
         .then(res=>res.json())
         .then(data=>setProducts(data))
    },[]);

useEffect(()=>{
    let savedCart = []
    const storedCart = getShoppingCart();

    for(const id in storedCart){
        const addedProduct = products.find(product=>product.id===id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }  
    }
    setCart(savedCart)
},[products])


const handleClearCart=()=>{
    setCart([])
    deleteShoppingCart()
}
   
    
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
               <Cart handleClearCart={handleClearCart} FaArrowRight={FaArrowRight} cart={cart}>
                  <Link className='link' to={'/orders'}>Review Order</Link>
               </Cart>
            </div>
          
        </div>
    );
};

export default Shop;