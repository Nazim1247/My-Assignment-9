import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
   
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;