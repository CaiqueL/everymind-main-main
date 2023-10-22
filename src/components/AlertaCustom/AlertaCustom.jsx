import React from 'react';
import './styles.css';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <div className="alert-message">{message}</div>
        <button onClick={onClose} className="alert-ok-button">
          Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default Alert;
