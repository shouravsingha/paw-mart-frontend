import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const registerWithEmailPassword = (email, password)=>{
        console.log(email, password);
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const handleGoogleSignIn = () => {
            return signInWithPopup(auth, googleProvider)   
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authData = {
        registerWithEmailPassword,
        setUser,
        user,
        loading,
        setLoading,
        handleGoogleSignIn
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;