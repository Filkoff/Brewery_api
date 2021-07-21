import React, { useEffect, useState } from "react";
import styles from "./Brewery.module.scss";
import Modal from "../modal/Modal";

function Brewery({ brewery }) {
  const baseUrl = "https://api.openbrewerydb.org/breweries/";

  const [showModal, setShowModal] = useState(false);
  const [singleBrewery, setSingleBrewery] = useState();

  const onClose = (bool) => {
    setShowModal(bool);
  };

  const getBreweryInfo = async (id) => {
    const res = await fetch(`${baseUrl}${id}`);
    const brewery = await res.json();
    setSingleBrewery(brewery);
    setShowModal(true);
  };

  if (showModal) {
    return (
      <>
        <Modal brew={singleBrewery} onClose={onClose} />
        <div className={styles.card}>
          <h4>{brewery.name}</h4>
          <p>City: {brewery.city}</p>
          <p>Type: {brewery.brewery_type}</p>

          <button onClick={() => getBreweryInfo(brewery.id)}>
            Show information
          </button>
        </div>
      </>
    );
  }
  return (
    <div className={styles.card}>
      <h4>{brewery.name}</h4>
      <p>City: {brewery.city}</p>
      <p>Type: {brewery.brewery_type}</p>

      <button onClick={() => getBreweryInfo(brewery.id)}>
        Show information
      </button>
    </div>
  );
}

export default Brewery;
