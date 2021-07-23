import React from "react";
import styles from "./Modal.module.scss";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@material-ui/core";

const Modal = ({ brew, onClose }) => {
  const { t } = useTranslation();
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
        <Typography variant="h5">{brew.name}</Typography>
        <Typography variant="subtitle1">{`Brewery type: ${brew.brewery_type}`}</Typography>
        <Typography variant="subtitle1">{`Address: ${brew.city}, ${showState(
          brew
        )}, 
        ${showStreet(brew)}`}</Typography>
        <Typography variant="subtitle1">{showPhone(brew)}</Typography>
        <Button
          onClick={() => onClose(false)}
          variant="contained"
          color="primary"
        >
          {t("button3")}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
