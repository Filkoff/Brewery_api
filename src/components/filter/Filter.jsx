import React, { useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";

const Filter = () => {
  const baseurl = "https://api.openbrewerydb.org/breweries";

  const {
    types,
    cities,
    setTypes,
    setCities,
    setBreweries,
    url,
    setUrl,
    setLoading,
  } = useContext(AppContext);

  const filterByCity = async (city) => {
    setLoading(true);
    try {
      url === baseurl
        ? setUrl(`${baseurl}?by_city=${city}`)
        : setUrl(`${url}&by_city=${city}`);

      const response = await fetch(url);
      const data = await response.json();
      setBreweries(data);
      setTypes(
        data.map((brewery) => {
          return brewery.brewery_type;
        })
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterByType = async (type) => {
    setLoading(true);
    try {
      url === baseurl
        ? setUrl(`${baseurl}?by_type=${type}`)
        : setUrl(`${url}&by_type=${type}`);
      const response = await fetch(url);
      const data = await response.json();
      setBreweries(data);
      setCities(
        data.map((brewery) => {
          return brewery.city;
        })
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const uniqueTypes = [...new Set(types)];
  const uniqueCities = [...new Set(cities)];

  return (
    <div>
      <select
        onChange={(e) => {
          filterByCity(e.target.value);
        }}
      >
        <option value="">All</option>
        {uniqueCities.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        onChange={(e) => {
          filterByType(e.target.value);
        }}
      >
        <option value="">All</option>
        {uniqueTypes.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
