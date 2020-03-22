import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { auth } from 'firebase';

import { useAuth } from '../Login/useauth';

// const usePrevious = value => {
//     const prev = useRef();
//     useEffect(() => {
//         console.log(value);
//         prev.current = value;
        
//     }, [value])
//     return prev.current;
// }


const Header = () => {
    const auth = useAuth();
    // const user = useContext(userContext);
    //  const [count, setCount] = useState(0);
    //  const previous = usePrevious(count);
    return (
        <div className="header">
            {/* <h1>Count: {count} Previous: {previous}</h1> */}
            {/* <button onClick={() => setCount(count+1)} >+</button>
            <button  onClick={() => setCount(count-1)} >-</button> */}
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
             {
                 auth.user ?
                 <span style={{color:'yellow'}}> {auth.user.name} </span>
                 : <a href="/login"> Sign In</a>

             }
                
            </nav>
        </div>
    );
};

export default Header;