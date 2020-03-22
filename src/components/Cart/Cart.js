import React from 'react';
import { useAuth } from '../Login/useauth';


const Cart = (props) => {
    const cart = props.cart;

    const auth  = useAuth();

    const total = cart.reduce((total, prd) => total+prd.price * prd.quantity, 0);
    // debugger;

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }

    else if(total>0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    function formatNumber(num){
        const precison = num.toFixed(2);
        return Number(precison);
    }

    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)} </p>
            <p>Vat+Tax: {tax} </p>
            <p>Shipping: {shipping} </p>
            <p>Total Price: {grandTotal} </p>
            <br/>
            {
                props.children
            }
            <p>{}</p>
           
        </div>
    );
};

export default Cart;