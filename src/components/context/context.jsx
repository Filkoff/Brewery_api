import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [breweries, setBreweries] = useState([]);
  //   const [citiesList, setCitiesList] = useState([]);
  const [types, setTypes] = useState([]);
  const [cities, setCities] = useState([]);

  const [url, setUrl] = useState("https://api.openbrewerydb.org/breweries");

  const getBreweries = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCities(
        data.map((brewery) => {
          return brewery.city;
        })
      );
      setTypes(
        data.map((brewery) => {
          return brewery.brewery_type;
        })
      );
      setBreweries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBreweries(url);
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        breweries,
        setBreweries,
        city,
        setCity,
        types,
        cities,
        setTypes,
        setCities,
        setUrl,
        url,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
