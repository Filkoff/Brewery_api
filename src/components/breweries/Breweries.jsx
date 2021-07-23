import React from "react";
import Brewery from "../brewery/Brewery";
import styles from "./Breweries.module.scss";
import { AppContext } from "../context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const Breweries = () => {
  const { t } = useTranslation();
  const { breweries } = useContext(AppContext);

  if (breweries.length) {
    return (
      <div className={styles.cardsField}>
        {breweries.map((brewery) => (
          <Brewery brewery={brewery} key={brewery.id} />
        ))}
      </div>
    );
  } else {
    return (
      <Typography variant="h5" className={styles.emptyResult}>
        {t("nothingFound")}
      </Typography>
    );
  }
};

export default Breweries;
