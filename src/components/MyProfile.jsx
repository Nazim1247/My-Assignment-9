import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const MyProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <div className="w-1/2 mx-auto flex flex-col justify-center text-center space-y-4 my-8">
            <img className="w-52 h-52 rounded-full mx-auto" src={user?.photoURL || 'no user'} alt="" />
           <h2 className="text-3xl font-bold">User Profile</h2>
            <h3 className="text-xl font-semibold">{user?.displayName}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default MyProfile;