import React, { useEffect, useState } from 'react';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager'
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';

const Review = () => {
  
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        // console.log("remove clicked");
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const porductKeys = Object.keys(savedCart);

        const cartProducts = porductKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
    },[]);

    let thankYou;
    if(orderPlaced) {
        thankYou =  <img src={happyImage} alt="happyImage"/>
    }
    return (
        <div className="twin-container">
           <div className="product-container">
           {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)
            }

             { thankYou }

           </div>

            <div className="cart-container">
                <Cart cart={cart}> </Cart>
                    <Link to="/shipment">
                        <button className="main-button">Proceed Checkout</button>
                    </Link>
           
            </div>
        </div>
    );
};

export default Review;