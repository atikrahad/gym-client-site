import { NavLink } from "react-router-dom";
import img from "../../assets/Login/img.jpg";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Contextapi/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const { createAcount } = useAuth();
  const onSubmit = (e) => {
    const email = e.email;
    const password = e.password;
    const name = e.name;
    createAcount(email, password)
    .then(res => {
      console.log(res);
      updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: image
      })
    })
    .then(error => {
      console.log(error);
    })
  };
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
            <h1 className="text-5xl text-white font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#413c3c91]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-slate-300">Password</span>
                </label>
                <input
                  type={`${isOpen ? "text" : "password"}`}
                  placeholder="password"
                  {...register("password")}
                  className="input input-bordered"
                  required
                />
                <h1
                  className="absolute cursor-pointer top-12 right-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <GoEyeClosed className="text-2xl"></GoEyeClosed>
                  ) : (
                    <GoEye className="text-2xl"></GoEye>
                  )}
                </h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Profile Pic</span>
                </label>
                <input
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    const img = e.target.files[0];
                    const data = new FormData();
                    data.append("image", img);
                    fetch(`${import.meta.env.VITE_imageserver}`, {
                      method: "POST",
                      body: data,
                    })
                      .then((res) => res.json())
                      .then((data) => setImage(data.data.url));
                  }}
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn-bg">Register</button>
              </div>
              <h1 className="text-slate-300">
                Allready have account? <NavLink to="/login">Login</NavLink>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
