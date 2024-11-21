import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import auth from "../firebase/firebase.config";


const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const location = useLocation();

    useEffect(()=>{
        const queryParams = new URLSearchParams(location.search);
        const emailFromQuery = queryParams.get('email');
        if(emailFromQuery)setEmail(emailFromQuery);
    },[location]);

    const handleResetPassword = (e)=>{
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            setMessage('sent message in your email')

            setTimeout(() => {
                window.location.href = "https://mail.google.com";
              }, 2000);
        })
        .catch(error => {
            setMessage(`${error.message}`)
        })
    }
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Forget Password</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-xl">
      <form onSubmit={handleResetPassword} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button 
          type="submit"
          className="btn bg-green-500 text-white">Reset Password</button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  </div>
</div>
        </div>
    );
};

export default ForgetPassword;