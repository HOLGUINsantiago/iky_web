import React from "react";

import Nav from "../pageHome/Nav.js";
import LoginForm from "./LoginForm.js";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <Nav />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
