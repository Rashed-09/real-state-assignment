import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const ContextProvider = createContext(null)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    const info = {
        user,
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