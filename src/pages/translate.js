import React from "react";
import { useNavigate } from "react-router-dom";

const Translate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Translate</h1>
      <p>Use the ASL glove to translate text.</p>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </div>
  );
};

export default Translate;
