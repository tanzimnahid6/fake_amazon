import React from 'react';
import { FaTrashAlt,FaOpencart} from "react-icons/fa";
import './cart.css'
const Cart = ({cart,handleClearCart,children}) => {
 
    let total = 0;
    let totalShiping = 0;
    let quantity = 0;
    for(let product of cart){
        product.quantity = product.quantity||1
        total = total+product.price * product.quantity
        totalShiping = totalShiping+product.shipping
        quantity = quantity+product.quantity
    }
    const tax = total*7/100
    const grandTotal = total+totalShiping+tax
    return (
        <div className='cart'>
            <h1>Order summery</h1>
            <p>Selected item:{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Total Shiping:{totalShiping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h3>Grand Total:{grandTotal.toFixed(2)}</h3>

            <button onClick={handleClearCart} className='clear-cart'>
                 <span>Clear Cart</span>
                 <span><FaTrashAlt ></FaTrashAlt></span>
            </button>


            <button className='proceed-cart'>
                 <span>{children}</span>

                <span> <FaOpencart ></FaOpencart></span>
            </button>
            
            
        </div>
    );
};

export default Cart;