import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Login = () => {

  const {loginUser,loginWithGoogle, setUser} = useContext(AuthContext);
  const [error,setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);

        loginUser(email,password)
        .then(result =>{
          setUser(result.user)
          e.target.reset()
          navigate(location?.state ? location.state : '/')
          toast.success('Successfully Logged in!')
        })
        .catch(error => setError(error.message))
    }

    const handleGoogleLogin = ()=>{
      loginWithGoogle()
      .then(result =>{
        setUser(result.user)
        navigate(location?.state ? location.state : '/')
        toast.success('Successfully Logged in!')
      })
      .catch(error => console.log(error.message))
    }

    const handleForgetPassword = ()=>{
      console.log('added', emailRef.current.value);
      const email = emailRef.current.value;
      if(!email){
        console.log('please provide a valid email')
      }else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
          alert('password reset email sent')
        })
      }
    }
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:w-1/2">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          ref={emailRef}
          name='email'
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text':'password'}
          name='password'
          placeholder="password" className="input input-bordered" required />
          <button 
          onClick={()=> setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-4 top-12">
          {showPassword?<FaEyeSlash />:<FaEye />}
            </button>
          <label 
          onClick={handleForgetPassword}
          className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white text-xl ">Login</button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      <button onClick={handleGoogleLogin} className="btn btn-sm w-1/2 mx-auto">Login With Google</button>
      <p className="text-center py-4">New to this page? please <Link to='/register' className="text-rose-500">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;