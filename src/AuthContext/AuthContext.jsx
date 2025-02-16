import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/config";

export const ContextProvider = createContext(null)
const AuthContext = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)

    // This command for registration
    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // This command for login
    const loginUsers = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // This Command for Log Out
    const logOut = () => {
        return signOut(auth)
    }



    // User have or not observation logic
    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, current => {
            setUser(current)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const info = {
        user,
        createUsers, 
        loginUsers,
        logOut
    }
    return (
        <ContextProvider.Provider value={info}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthContext;
AuthContext.propTypes ={
    children: PropTypes.node
}