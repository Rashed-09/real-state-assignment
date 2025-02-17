import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/config";

export const ContextProvider = createContext(null)
const AuthContext = ({children}) => {
    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()
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

    // Sign in With Google 
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // Sign In with GitHub
    const githubLogin = () => {
        return signInWithPopup(auth, gitProvider);
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
      logOut,
      googleLogin,
      githubLogin,
    };
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