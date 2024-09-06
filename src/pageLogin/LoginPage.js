import React from "react";
import Nav from "../Component/Nav.js";
import LoginForm from "./LoginForm.js";
import "./LoginPage.css";
import AuthMenu from "../Component/AuthMenu.js";

function LoginPage() {
  return (
    <div className="loginPage">
      <Nav />
      <LoginForm />
      <div className="authMenu">
        <AuthMenu />
      </div>
    </div>
  );
}

export default LoginPage;
