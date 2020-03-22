import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };
    return (
        <div  style={reviewItemStyle} className="product-name">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: ${price} </small></p>
            <p></p>
            <br/>
            <button className="main-button"
            onClick = {() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;