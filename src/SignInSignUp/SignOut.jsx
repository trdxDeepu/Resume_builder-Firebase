import React from "react";
import { getAuth } from "firebase/auth";

const SignOut = () => {
  const auth = getAuth();

  if (auth.currentUser) {
    return (
      <div>
        <p>
          You are logged in as <strong>{auth.currentUser.email}</strong>
        </p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  }
};
export default SignOut;
