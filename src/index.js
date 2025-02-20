import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App.js";
import { AuthProvider } from "./contexts/AuthContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);