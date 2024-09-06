import React, { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log({ firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <h1>Crear una cuenta</h1>
        <p>¡Bienvenido! Regístrate para no perderte nada.</p>
        <div className="input-group">
          <input
            type="text"
            id="firstName"
            placeholder="Nom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Prénom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="button-signupForm" type="submit">
          Crear una cuenta
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
