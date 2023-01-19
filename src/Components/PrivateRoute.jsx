import { Outlet, Navigate } from "react-router-dom";
import {  UseAuthState } from "../Hooks/UseAuthState";
import Loader from "./Loader";




const PrivateRoute = () => {
   
    const {loggedIn , loading} = UseAuthState();

    if(loading) {
        return <Loader/>
         }
  
    return loggedIn ? <Outlet /> : <Navigate to ="/sign" />
        

}

export default PrivateRoute