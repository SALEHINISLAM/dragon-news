import React, { useContext } from "react";
import PropTypes from "prop-types";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = (props) => {
    const {signIn}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        console.log(event.currentTarget);
        const form=new FormData(event.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        signIn(email,password)
        .then(res=>{
            console.log(res.user);
            //navigate
            navigate(location?.state? location.state : '/');
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
  return (
    <>
    <div className="hero bg-[#F3F3F3] min-h-screen flex flex-col">
    <Navbar/>
      <div className="hero-content bg-white flex-col lg:w-1/2  shadow-2xl">
        
        <div className="card w-full md:w-3/4 shrink-0">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black">Login your account</h1>
        </div>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-[#F3F3F3] text-black"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3] text-black"
                name="password"
                required
              />
              <label className="label">
                <a href="/register" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#403F3F] text-white text-xl font-semibold">Login</button>
            </div>
          </form>
          <p className="text-center">Don't have an account? <Link to='/register' className="text-red-600">Register here.</Link></p>
        </div>
      </div>
    </div>
    </>
    
  );
};

Login.propTypes = {};

export default Login;
