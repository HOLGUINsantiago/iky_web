import React from "react";

import Nav from "../pageHome/Nav.js";
import SignupForm from "./SignupForm.js";
import "./SignupPage.css";

function LoginPage() {
  return (
    <div className="signupPage">
      <Nav />
      <SignupForm />
    </div>
  );
}

export default LoginPage;
