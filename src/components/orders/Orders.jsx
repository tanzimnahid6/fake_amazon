import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './orderItem.css'
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';


const Orders = () => {
    // get all products from the main json file
    const savedCart = useLoaderData()
    const [cartProducts,setCartProducts] = useState(savedCart)

    const handleDelteItem=(id)=>{
    const newSavedCart = cartProducts.filter(item=>item.id!==id)
    setCartProducts(newSavedCart)
    removeFromDb(id)
    }

    const handleClearCart=()=>{
        setCartProducts([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container '>
            
            <div className='order-item'>
              {
               cartProducts.map((product)=><ReviewItem key={product.id}  handleDelteItem={handleDelteItem} product={product}></ReviewItem>)
              }
            </div>
            
            <div className='cart-container'>
                 <Cart handleClearCart={handleClearCart} cart={cartProducts}>
                    <Link className='cheakout-link' to='/cheakout'>Cheakout</Link>
                 </Cart>
            </div>
        </div>
    );
};

export default Orders;