import React from "react";
import Button from "./components/Button.js";
import logo from './assets/logo.png';
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import './App.css';

function App() {
  return(
    <div className="container">
      {/* Sign Out Button */}
      <div className="sign-out">
        <Button variant="outline" className="sign-out-button">
          <LogOut className="icon" /> Sign Out
        </Button>
      </div>

          {/* Title and Logo */}
      <div className="title-logo-container">
        <div className="title">Signwave</div>
        <div className="logo-slot">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
      </div>
      
      {/* Main Buttons */}
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="translate-button"
        >
          Translate
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="practice-button"
        >
          Practice
        </motion.button>
      </div>
    </div>
  );
}

export default App;
