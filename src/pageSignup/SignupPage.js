import React from "react";

import Nav from "../Component/Nav.js";
import SignupForm from "./SignupForm.js";
import "./SignupPage.css";
import AuthMenu from "../Component/AuthMenu.js";

function LoginPage() {
  return (
    <div className="signupPage">
      <Nav />
      <SignupForm />
      <div className="authMenu">
        <AuthMenu />
      </div>
    </div>
  );
}

export default LoginPage;
