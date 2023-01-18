import React,{useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged ,signOut } from 'firebase/auth'
import SignOut from "../SignInSignUp/SignOut";


const Header = () => {


  // const [pageState , setPageState] = useState("Sign In")

  const auth = getAuth()

  



  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      
        if(user){
          setPageState("Sign In")
        }
        else{
          setPageState("Sign")
        }

      })
  },[auth])

  const location = useLocation();
  const navigate = useNavigate();

  function pathMatch(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  const getName = localStorage.getItem("name") ;

  return (
    <div className="bg-white border-b-0 shadow-sm sticky top-0 z-50 ">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://cdn3.careeraddict.com/uploads/article/59032/illustration-woman-laptop-cv.jpg"
            alt="logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
                        
                   <ul className="flex space-x-10 ">
                   
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMatch("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${
                pathMatch("/profile") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              Profile
            </li>

            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${
                pathMatch("/contact") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </li>
            {!getName && (
            <li

              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${
                pathMatch("/sign") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign")}
            >
             Sign In
            </li>
             )
             }
             {getName && (
            <li

              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${
                pathMatch("/sign") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/signout")}
            >
             Sign Out
            </li>
             ) 
            }
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
