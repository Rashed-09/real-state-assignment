import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/config";

export const ContextProvider = createContext(null)
const AuthContext = ({children}) => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This command for registration
  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // This command for login
  const loginUsers = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in With Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Sign In with GitHub
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  // This Command for Log Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, url) => {
    return updateProfile(auth.currentUser, {displayName: `${name}`, photoURL: `${url}`})
  }

  // User have or not observation logic
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  
  const info = {
    user,
    loading,
    createUsers,
    loginUsers,
    logOut,
    googleLogin,
    githubLogin,
    profileUpdate
  };
  return (
    <ContextProvider.Provider value={info}>{children}</ContextProvider.Provider>
  );
};

export default AuthContext;
AuthContext.propTypes ={
    children: PropTypes.node
}