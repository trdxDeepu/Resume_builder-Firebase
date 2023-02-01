import React from "react";
import PrivateRoute from "../Components/PrivateRoute";
import SignOut from "../SignInSignUp/SignOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../SignInSignUp/SignIn";

import Signup from "../SignInSignUp/Signup";
import ForgotPassword from "../SignInSignUp/ForgotPassword";
import Header from "../Pages/Header";
import Temp from "../Pages/Temp";
import Profile from "../Pages/Profile";
import Display from "../Pages/Dispaly";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/temp" element={< Temp/>}/>
          <Route path="/templates/:id" element={<Display />}/>
          <Route path="/signout" element={<SignOut />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
