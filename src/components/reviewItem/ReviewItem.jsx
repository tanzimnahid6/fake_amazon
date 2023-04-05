import React from 'react';
import './review.css'
import { FaTrashAlt} from "react-icons/fa";

const ReviewItem = ({product,handleDelteItem}) => {
    // console.log(product);
    const {name,img,price,quantity,id} = product
    return (
        <div className='review-item '>
            <div>
                <img  src={img} alt="" />
            </div>

            <div className='item-details'>
                <p>{name}</p>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
            </div>

            <div onClick={()=>handleDelteItem(id)} className='dlt-btn'>
                <FaTrashAlt ></FaTrashAlt>
            </div>
        </div>
    );
};

export default ReviewItem;