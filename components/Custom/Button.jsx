import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn rounded-badge bg-black text-white hover:bg-white hover:text-black px-10">
      {children}
    </button>
  );
};

export default Button;
