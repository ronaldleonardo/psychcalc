// src/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Congratulations! 🎉</h2>
        <p>You have successfully completed the questionnaire.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
