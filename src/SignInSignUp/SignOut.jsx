import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatch(route) {
    if (route === location.pathname) {
      return true;
      console.log(location.pathname);

    }
  }

  function logOut() {
    const auth = getAuth();
    auth.signOut();
    navigate("/sign");
    toast.success("🙌🙌Logged out successfully");
  }

  return (
    <li>
      <button
        className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
      ${
        (pathMatch("/sign") && "invisible" || pathMatch("/signup") && "invisible")
      } text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer
      `}
        onClick={logOut}
      >
        Sign Out{" "}
      </button>
    </li>
  );
};
export default SignOut;
