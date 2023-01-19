import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const SignOut = () => {
    const navigate = useNavigate();
  
    localStorage.removeItem("name")
     navigate('/sign')
     toast.success("🙌🙌 Signed out ������")


  
    return (  
      <div>
       
      </div>
    );
  
};
export default SignOut;