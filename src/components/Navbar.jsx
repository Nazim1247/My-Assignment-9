import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto py-4 space-y-4 flex flex-col md:flex-row justify-between items-center">
               <div>
                    <h2 className="text-xl font-semibold">Career Counseling</h2>
                </div>
                <div className="flex items-center gap-6">
                    <NavLink to="/" className={({isActive})=>isActive?'text-green-500':''}>Home</NavLink>
                    <NavLink to="/profile" className={({isActive})=>isActive?'text-green-500':''}>My Profile</NavLink>
                </div>
                <div>
                    
                    {user && user.email}

                    <NavLink to="/login" className="btn btn-sm bg-green-500 text-white">Login</NavLink>
                </div>
               </div>
    );
};

export default Navbar;