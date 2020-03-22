import React, { Children, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';

firebase.initializeApp(firebaseConfig);


    const AuthContext = createContext();

    export const AuthContextProvider = (props) =>{
        const auth = Auth();
        return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
    }

    export const useAuth = () => useContext(AuthContext);

    const getUser = user =>{
        const {displayName, email, photoURL} = user;
        return {name: displayName, email, photo: photoURL};
    }

    const Auth = () => {
    
    const [user, setUser] = useState(null);
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const signedInUser = getUser(res.user);
            setUser(signedInUser);
            // console.log(res);
            return res.user;
        })
        .catch(err => {
            // console.log(err);
            setUser(null);
            return err.message;
        })
    }

    const signOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            setUser(null);
        })
        .catch(err => {
            
        })
    }

    useEffect( () => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              const currentUser = getUser(usr);
              setUser(currentUser);
            } else {
              
            }
          });
    },[])

    return {
        user,
        signInWithGoogle, 
        signOut
    }
}

export default Auth;