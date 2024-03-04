import { NavLink } from "react-router-dom";
import img from "../../assets/Login/img.jpg";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import useAuth from "../../Contextapi/useAuth";
const Login = () => {
    const [isOpen,setIsOpen] = useState(false)
    const {emailLogin, googleLogin} = useAuth()

    const handleLogin = e => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      emailLogin(email,password)
      .then(res=>{
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    }

    const handleGoogleLogin = ()=>{
      googleLogin()
      .then(res=> console.log(res))
      .catch(error => console.log(error))
    }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.75), rgba(24,24,24,0.85)), url(${img})`,
      }}
      className="w-[100vw] h-[100vh] bg-cover"
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#413c3c91]">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-slate-300">Password</span>
                </label>
                <input
                  type={`${isOpen? 'text': 'password'}`}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <h1 className="absolute cursor-pointer top-12 right-2" onClick={()=> setIsOpen(!isOpen)}>
                    {
                        isOpen ? <GoEyeClosed className="text-2xl"></GoEyeClosed> :  <GoEye className="text-2xl"></GoEye>
                    }
                </h1>
              </div>
              <div className="form-control mt-6">
                <button className="btn-bg">Login</button>
              </div>
              <h1 className="text-slate-300">New member? <NavLink to='/register'>Register</NavLink></h1>
              <button onClick={handleGoogleLogin} className="btn-bg">Login with Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
