import React, { useState } from "react";
import styles from "./Brewery.module.scss";
import Modal from "../modal/Modal";
import { AppContext } from "../context/context";
import { useContext } from "react";

function Brewery({ brewery }) {
  const baseUrl = "https://api.openbrewerydb.org/breweries/";
  const [showModal, setShowModal] = useState(false);
  const [singleBrewery, setSingleBrewery] = useState();

  const { setLoading } = useContext(AppContext);

  const onClose = (bool) => {
    setShowModal(bool);
  };

  const getBreweryInfo = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}${id}`);
      const brewery = await res.json();
      setSingleBrewery(brewery);
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
