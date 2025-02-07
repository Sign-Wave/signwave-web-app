import React from "react";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Practice</h1>
      <p>Practice using the ASL glove.</p>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default Practice;
