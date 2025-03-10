/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <p className="text-center"><span className="loading loading-spinner loading-lg"></span></p>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;