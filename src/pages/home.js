import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.js";
import logo from "../assets/logo.png";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Signwave Logo" className="logo" />
          <h2>Signwave</h2>
        </div>
        <Button className="sign-out-button" onClick={() => navigate("/")}>
          <LogOut className="icon" /> Sign Out
        </Button>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="welcome">Welcome, </h1>
        <div className="button-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="translate-button"
            onClick={() => navigate("/translate")}
          >
            Translate
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="practice-button"
            onClick={() => navigate("/practice")}
          >
            Practice
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
