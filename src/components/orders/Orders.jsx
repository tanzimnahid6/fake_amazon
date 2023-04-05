import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './orderItem.css'
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    // get all products from the main json file
    const savedCart = useLoaderData()
    console.log(savedCart);
    const [cartProducts,setCartProducts] = useState(savedCart)

    const handleDelteItem=(id)=>{
    const newSavedCart = cartProducts.filter(item=>item.id!==id)
    setCartProducts(newSavedCart)
    removeFromDb(id)

   }

    return (
        <div className='shop-container '>
            
            <div className='order-item'>
              {
               cartProducts.map((product)=><ReviewItem key={product.id} handleDelteItem={handleDelteItem} product={product}></ReviewItem>)
              }
            </div>
            
            <div className='cart-container'>
                 <Cart cart={cartProducts}></Cart>
            </div>
        </div>
    );
};

export default Orders;