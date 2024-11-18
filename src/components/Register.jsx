import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {

  const {setUser,createUser} = useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result =>{
          setUser(result.user)
        })
        .catch(error => console.log(error.message))
      }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:w-1/2">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"
          name='name'
          placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text"
          name='photo'
          placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name='password'
          placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white text-xl ">Register</button>
        </div>
      </form>
      <button className="btn btn-sm w-1/2 mx-auto">Login With Google</button>
      <p className="text-center py-4">Already have an account? please <Link to='/login' className="text-rose-500">Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;