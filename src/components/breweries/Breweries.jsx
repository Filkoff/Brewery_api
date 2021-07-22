import React from "react";
import Brewery from "../brewery/Brewery";
import styles from "./Breweries.module.scss";
import { AppContext } from "../context/context";
import { useContext } from "react";

const Breweries = () => {
  const { breweries } = useContext(AppContext);

  if (breweries.length > 0) {
    return (
      <div className={styles.cardsField}>
        {breweries.map((brewery) => {
          return <Brewery brewery={brewery} key={brewery.id} />;
        })}
      </div>
    );
  } else {
    return <h3>Can't find anything</h3>;
  }
};

export default Breweries;
