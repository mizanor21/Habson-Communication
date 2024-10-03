import React, { useEffect, useState } from "react";

const FadingHeading = () => {
  const text =
    "We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrators in principle.";
  const [visibleChars, setVisibleChars] = useState([]);

  useEffect(() => {
    let timeoutId;
    const chars = text.split("");

    chars.forEach((char, index) => {
      timeoutId = setTimeout(() => {
        setVisibleChars((prev) => [...prev, char]);
      }, index * 100); // Adjust the delay for each character
    });

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, []);

  return (
    <h2 className="text-4xl font-bold">
      {visibleChars.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-opacity duration-500 ${
            visibleChars[index] ? "opacity-100" : "opacity-0"
          }`}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};

export default FadingHeading;
