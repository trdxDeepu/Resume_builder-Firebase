import React from "react";
import PrivateRoute from "../Components/PrivateRoute";
import SignOut from "../SignInSignUp/SignOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../SignInSignUp/SignIn";
import Templates from "../Templates/Temp";
import Signup from "../SignInSignUp/Signup";
import ForgotPassword from "../SignInSignUp/ForgotPassword";
import Header from "../Pages/Header";
import ContactUs from "../Pages/ContactUs";
import Profile from "../Pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<PrivateRoute />}>
            <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route path="/templates/:id" element={<Templates />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
