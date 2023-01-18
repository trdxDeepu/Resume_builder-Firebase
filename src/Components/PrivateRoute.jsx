import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {UseAuthState} from '../Hooks/UseAuthState'




const PrivateRoute = () => {
   
    const {loggedIn , loading} = UseAuthState();

    if(loading) {
        return <p>loading...</p>
    }
  
    return loggedIn ? <Outlet /> : <Navigate to ="/sign" />
        

}

export default PrivateRoute