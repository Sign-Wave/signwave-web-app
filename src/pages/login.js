import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here (e.g., authentication check)
    navigate("/home"); // Redirect to home page on successful login
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Enter your credentials to continue.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
