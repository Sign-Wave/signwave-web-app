import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
