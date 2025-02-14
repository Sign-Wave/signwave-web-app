import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Add your logo image
import productImage from "../assets/product.png"; // Add your product image
import "../styles/landing.css"; // Ensure correct path

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Signwave Logo" className="logo" />
          <h2>Signwave</h2>
        </div>
        <button
          className="login-button small"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="left-section">
          <h1 className="slogan">Breaking Barriers with Signwave</h1>
          <p className="description">
            Experience the future of communication with our ASL translating
            glove. Seamlessly convert hand gestures into spoken language,
            bridging the gap between the deaf and hearing communities.
          </p>
          <button
            className="login-button large"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
        <div className="right-section">
          <img
            src={productImage}
            alt="Signwave Glove"
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
