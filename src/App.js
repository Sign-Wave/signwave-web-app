import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "./firebase.js";
import Landing from "./pages/landing.js";
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Translate from "./pages/translate.js";
import Practice from "./pages/practice.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
