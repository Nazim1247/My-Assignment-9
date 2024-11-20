import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

  const {setUser,createUser,loginWithGoogle,manegeProfile} = useContext(AuthContext)
  const navigate = useNavigate();
  const [error, setError] = useState('');

    const handleRegister = (e)=>{
        e.preventDefault();
        setError('')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if(!/[a-z]/.test(password)){
          setError('Password must be contain at least one lowercase letter')
          return;
        }

        if(!/[A-Z]/.test(password)){
          setError('Password must be contain at least one uppercase letter')
          return;
        }

        if(password.length < 6){
          setError('Password must be contain at least 6 character')
          return;
        }

        createUser(email,password)
        .then(result =>{
          setUser(result.user)
          e.target.reset()
          navigate('/')
          toast.success('Successfully Registered!')
          // update profile
          manegeProfile({
            displayName: name,
            photoURL: photo
          })
          .then(()=>{
            navigate('/')
          })
          .catch((error)=>console.log(error))
        
        })
        .catch(error => console.log(error.message))
      }

      const handleGoogleRegister = ()=>{
        loginWithGoogle()
        .then(result => {
          setUser(result.user)
          navigate('/')
          toast.success('Successfully Registered!')
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
      {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      <button onClick={handleGoogleRegister} className="btn btn-sm w-1/2 mx-auto">Login With Google</button>
      <p className="text-center py-4">Already have an account? please <Link to='/login' className="text-rose-500">Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;