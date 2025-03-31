import React from "react";

const ScrollDownButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <button onClick={scrollToBottom}>▼</button>
    </div>
  );
};

export default ScrollDownButton;
