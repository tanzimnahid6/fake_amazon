import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   
    const {img,name,price,ratings,quantity,seller,id} = props.product;
    const handleProduct = props.handleProduct
    const testing = props.testing
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : {price}</p>
                <p>Manufacture:{seller}</p>
                <p>Ratings:{ratings} Star</p>
                
            </div>
            <button onClick={()=>handleProduct(props.product)} className='btn-cart'>Add To Cart<FontAwesomeIcon icon={faShoppingCart } /></button>
        </div>
    );
};

export default Product;