import React from 'react';
import './cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let totalShiping = 0;
    for(let product of cart){
        total = product.price+total
        totalShiping = totalShiping+product.shipping
    }
    const tax = total*7/100
    const grandTotal = total+totalShiping+tax
    return (
        <div className='cart'>
            <h1>Order summery</h1>
            <p>Selected item:{cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shiping:{totalShiping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h3>Grand Total:{grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;