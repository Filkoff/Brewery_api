import React, { useState } from "react";
import styles from "./Brewery.module.scss";
import Modal from "../modal/Modal";
import { AppContext } from "../context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@material-ui/core";

function Brewery({ brewery }) {
  const { t } = useTranslation();
  const baseUrl = "https://api.openbrewerydb.org/breweries/";
  const [showModal, setShowModal] = useState(false);
  const [singleBrewery, setSingleBrewery] = useState();

  const { setLoading } = useContext(AppContext);

  const onClose = (isClosed) => {
    setShowModal(isClosed);
  };

  const getBreweryInfo = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}${id}`);
      const brewery = await res.json();
      setSingleBrewery(brewery);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (showModal) {
    return (
      <>
        <Modal brew={singleBrewery} onClose={onClose} />
        <div className={styles.card}>
          <Typography variant="h5">{brewery.name}</Typography>
          <Typography variant="subtitle1">
            {t("city")} {brewery.city}
          </Typography>
          <Typography variant="subtitle1">
            {t("type")} {brewery.brewery_type}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => getBreweryInfo(brewery.id)}
            size="small"
          >
            {t("button2")}
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.card}>
      <Typography variant="h5">{brewery.name}</Typography>
      <Typography variant="subtitle1">
        {t("city")}: {brewery.city}
      </Typography>
      <Typography variant="subtitle1">
        {t("type")}: {brewery.brewery_type}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => getBreweryInfo(brewery.id)}
        size="small"
      >
        {t("button2")}
      </Button>
    </div>
  );
}

export default Brewery;
