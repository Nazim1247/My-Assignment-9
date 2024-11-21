import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";


const MyProfile = () => {
    const {user} = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await updateProfile(user, { displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!")
    } catch (error) {
          toast.error(`Error: ${error.message}`)
      }
    };

    return (
        <div>
            <Helmet>
            <title>Career Counseling | Profile</title>
            </Helmet>

        <div className="mt-4 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-52 h-52 rounded-full mx-auto"
        />
        <h2 className="mt-2 text-xl font-medium">Name: {user?.displayName}</h2>
        <p className="mt-2 text-lg font-medium">Email: {user?.email}</p>
      </div>

        <div className="hero">
      <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
      
    </div>
    <div className="card bg-base-100 w-full mx-auto shadow-xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" 
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button 
          type="submit"
          className="btn bg-green-500 text-white">Update Your Profile</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;