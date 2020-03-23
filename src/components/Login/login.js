import React from 'react';
import Auth from './useauth';



const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () =>{
        auth.signOut()
        .then(res =>{
            window.location.pathname = '/';
        });
    }
    return (
        <div>
            <h1>This is log in page</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Signout</button> :
                <button onClick={handleSignIn}>Sign In</button>
            }
            
        </div>
    );
};

export default Login;