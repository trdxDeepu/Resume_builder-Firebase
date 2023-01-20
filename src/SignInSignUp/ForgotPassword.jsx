import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";


import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../Components/OAuth";

const ForgotPassword = () => {
  
  const [email,setEmail] = useState("")
  
  const handleChange = (e) => {
    setEmail(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
        const auth = getAuth()
        await sendPasswordResetEmail(auth,email)
        toast.success("✅✅Check your email for the link to reset your password")

    }
    catch(err){
      toast.error("🤷‍♀️🤷‍♀️Could not send reset password")
    }

    }

    const token = window.localStorage.getItem("token");

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 ">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt="key"
            className="w-full rounded-3xl "
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded-md transition-ease-in-out"
              value={email}
              id="email"
              onChange={handleChange}
              placeholder="Email address"
            />

           

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <span className="mb-6">
                Don't have a Account?
                <Link
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                  to="/signup"
                >
                  Register{" "}
                </Link>
              </span>
              <span>
                <Link
                  to="/sign"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                 Sign In Instead
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-small font-medium uppercase shadow-md rounded-xl hover:bg-blue-700 transition duration-150  ease-in-out hover:shadow-xl active:bg-blue-800"
            >
              Send reset password{" "}
            </button>
            <div className="my-4 before:border-t items-center flex before:flex-1  before:border-gray-300  after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4"> OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
