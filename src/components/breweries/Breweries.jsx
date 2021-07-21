import React from "react";
import Brewery from "../brewery/Brewery";
import styles from "./Breweries.module.scss";

function Breweries({ breweries }) {
  return (
    <div className={styles.cardsField}>
      {breweries.map((brewery) => {
        return <Brewery brewery={brewery} key={brewery.id} />;
      })}
    </div>
  );
}

export default Breweries;
