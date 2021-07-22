import React, { useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";

const Filter = () => {
  const baseurl = "https://api.openbrewerydb.org/breweries";
  const [cityPath, setCityPath] = useState("");
  const [typePath, setTypePath] = useState("");

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

  const getBrewData = async () => {
    const response = await fetch(baseurl);
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
  };

  useEffect(() => {
    getBrewData();
  }, []);

  const uniqueTypes = [...new Set(types)];
  const uniqueCities = [...new Set(cities)];

  const fetchFilteredData = async (cityArg, typeArg) => {
    try {
      setUrl(`${baseurl}?by_city=${cityArg}&by_type=${typeArg}`);
      const response = await fetch(url);
      const data = await response.json();
      setBreweries(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterByCity = async (city) => {
    setLoading(true);
    setCityPath(city);
    fetchFilteredData(city, typePath);
    setLoading(false);
  };

  const filterByType = async (type) => {
    setLoading(true);
    setTypePath(type);
    fetchFilteredData(cityPath, type);
    setLoading(false);
  };
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
