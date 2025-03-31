import React from "react";

const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <button onClick={scrollToTop}>▲</button>
    </div>
  );
};

export default ScrollUpButton;
