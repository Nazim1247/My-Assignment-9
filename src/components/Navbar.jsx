import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
    const {user,logoutUser} = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto py-4 space-y-4 flex flex-col md:flex-row justify-between items-center">
               <div>
                    <h2 className="text-2xl font-semibold">Career Counseling</h2>
                </div>
                <div className="flex items-center gap-6">
                    <NavLink to="/" className={({isActive})=>isActive?'text-green-500':''}>Home</NavLink>
                    <NavLink to="/careerTips" className={({isActive})=>isActive?'text-green-500':''}>Career-Tips</NavLink>
                    <NavLink to="/successStories" className={({isActive})=>isActive?'text-green-500':''}>Success-Stories</NavLink>
                    <NavLink to="/profile" className={({isActive})=>isActive?'text-green-500':''}>My Profile</NavLink>
                </div>
                <div>

                    {
                        user && user.email ? 
                        <>
                        <div className="flex items-center gap-4">
                        <img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL}/>
                        <button onClick={logoutUser} className="btn bg-green-500 text-white">Logout</button>
                        </div>
                        </>
                        : <NavLink to="/login" className="btn bg-green-500 text-white">Login</NavLink>
                    }
                    
                </div>
               </div>
    );
};

export default Navbar;