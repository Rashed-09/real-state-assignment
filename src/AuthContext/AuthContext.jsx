import { createContext } from "react";

export const ContextProvider = createContext(null)
const AuthContext = ({children}) => {
    const info = {

    }
    return (
        <ContextProvider.Provider value={info}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthContext;