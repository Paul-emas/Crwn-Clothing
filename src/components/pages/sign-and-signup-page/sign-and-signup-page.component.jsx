import React from "react";

import "./sign-and-signup-page.style.scss";
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SignInAndSignupPage = () => (
  <div className="auth-container">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignupPage;
