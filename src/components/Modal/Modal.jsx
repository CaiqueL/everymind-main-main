import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button onClick={closeModal} className="close-button">
            X
          </button>
        </div>
        <div className="modal-content">
          <p>This is the modal content.</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
