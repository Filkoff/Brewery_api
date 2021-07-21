import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ brew, onClose }) => {
  const showPhone = (brew) => {
    return brew.phone ? `phone: ${brew.phone}` : null;
  };
  const showState = (brew) => {
    return brew.state ? brew.state : "-";
  };
  const showStreet = (brew) => {
    return brew.street ? brew.street : "-";
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__body}>
        <h4>{brew.name}</h4>
        <p>{`Brewery type: ${brew.brewery_type}`}</p>
        <p>{`Address: ${brew.city}, ${showState(brew)}, 
        ${showStreet(brew)}`}</p>
        <p>{showPhone(brew)}</p>
        <button onClick={() => onClose(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
