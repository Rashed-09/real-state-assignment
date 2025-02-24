import { useContext } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(ContextProvider)

    if(loading) {
        return <div className="loading loading-spinner text-neutral"></div>;
    }
    if(user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRout;
PrivetRout. propTypes = {
    children: PropTypes.node
}