// signup.js
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext.js";
import { auth } from "../firebase.js"; // Import auth from your firebase config file
import "../styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      let user = userCredential.user;

      // Store first name in Firebase Auth profile
      await updateProfile(user, { displayName: firstName });

      // Refresh user data to reflect updated profile
      await user.reload();
      user = auth.currentUser;

      // Set user in context
      setUser(user.displayName);

      // Navigate to home page
      navigate("/home");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Signwave Logo" className="logo" />
          <h2>Signwave</h2>
        </div>
        <button className="home-button small" onClick={() => navigate("/")}>
          Home
        </button>
      </div>

      <div className="signup-box">
        <h1>Sign Up</h1>
        <p>Create an account to get started</p>

        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />

        <label>Email</label>
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
          <button className="signup-button" onClick={handleSignup}>Sign Up</button>
          <button className="login-button" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;