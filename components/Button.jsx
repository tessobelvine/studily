import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      className={`rounded p-1 px-4 border text-white text-xs ${className}`}>
      {children}
    </button>
  );
}
