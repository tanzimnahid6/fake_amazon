import React from 'react';
import './product.css'
const Product = (props) => {
    console.log(props.product);
    const {img,name,price,ratings,quantity,seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : {price}</p>
                <p>Manufacture:{seller}</p>
                <p>Ratings:{ratings} Star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;