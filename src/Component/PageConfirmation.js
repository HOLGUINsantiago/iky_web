import React, { useState, useEffect } from "react";
import "./PageConfirmation.css";

function Confirmation() {
  const [message, setMessage] = useState("");

  const confirmer = () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    if (token) {
      fetch(
        `https://estudiantes-service-latest.onrender.com/confirmer/${token}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setMessage(data.message || "Confirmation successful!");
        })
        .catch((error) => {
          console.error("Error:", error);
          setMessage("Confirmation failed.");
        });
    }
  };

  useEffect(() => {
    confirmer();
  }, []);

  return (
    <div className="confirmation">
      <h2>{message}</h2>
    </div>
  );
}

export default Confirmation;
