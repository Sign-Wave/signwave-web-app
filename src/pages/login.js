import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext.js"; // Import useAuth
import { auth } from "../firebase.js"; // Import auth from your firebase config file
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Get setUser from context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
       const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve the first name from Firebase Auth and set it in context
      setUser(user.displayName);
      navigate("/home");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Signwave Logo" className="logo" />
          <h2>Signwave</h2>
        </div>
        <button className="home-button small" onClick={() => navigate("/")}>
          Home
        </button>
      </div>

      <div className="login-box">
        <h1>Login</h1>
        <p>Enter your credentials to continue</p>

        <label>Username</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;