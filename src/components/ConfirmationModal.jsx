// src/ConfirmationModal.jsx
import React, { useEffect, useRef } from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  const modalRef = useRef(null);

  // Center the modal in the viewport when it opens and disable scrolling
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Disable scrolling
      document.body.style.overflow = "hidden";

      // Center the modal in the viewport
      const modal = modalRef.current;
      const viewportHeight = window.innerHeight;
      const modalHeight = modal.offsetHeight;

      // Calculate the top position to center the modal in the viewport
      const top = window.scrollY + (viewportHeight - modalHeight) / 2;
      modal.style.top = `${top}px`;
    }

    // Cleanup function to re-enable scrolling when the component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // If the modal is not open, return null (don't render anything)
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">
            Yes
          </button>
          <button onClick={onClose} className="cancel-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
