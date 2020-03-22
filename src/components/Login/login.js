import React from 'react';
import Auth from './useauth';



const Login = () => {
    const auth = Auth();
    // console.log(auth);
    return (
        <div>
            <h1>This is log in page</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Signout</button> :
                <button onClick={auth.signInWithGoogle}>Sign In</button>
            }
            
        </div>
    );
};

export default Login;