import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn rounded-badge bg-[#125b5c] text-white hover:bg-white hover:text-black px-10">
      {children}
    </button>
  );
};

export default Button;
