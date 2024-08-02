import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProviders";

const Register = (props) => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    //create user
    createUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message);
        
    })
  };
  return (
    <div className="hero bg-[#F3F3F3] min-h-screen flex flex-col">
      <Navbar />
      <div className="hero-content bg-white flex-col lg:w-1/2  shadow-2xl">
        <div className="card w-full md:w-3/4 shrink-0">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">
              Register your account
            </h1>
          </div>
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered bg-[#F3F3F3] text-black"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered bg-[#F3F3F3] text-black"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold">
                  Email
                </span>
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
                <span className="label-text text-black text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3] text-black"
                name="password"
                required
              />
            </div>
            <div className="form-control flex flex-row gap-3 items-center">
              <input type="checkbox" className="bg-[#f3f3f3] checkbox"></input>
              <span className="text-black">Accept Term & Conditions</span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#403F3F] text-white text-xl font-semibold">
                Register
              </button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600">
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
