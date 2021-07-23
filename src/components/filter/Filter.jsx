import React, { useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";
import Search from "../search/Search";
import { InputLabel, NativeSelect } from "@material-ui/core";
import styles from "./Filter.module.scss";
import { FormControl } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const baseurl = "https://api.openbrewerydb.org/breweries";

  const { t } = useTranslation();

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
    setCities(data.map(({ city }) => city));
    setTypes(data.map(({ brewery_type }) => brewery_type));
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
      <Search />

      <div className={styles.selects_block}>
        <div className={styles.single_select}>
          <FormControl className={styles.selects}>
            <InputLabel htmlFor="uncontrolled-native">{t("city")}</InputLabel>
            <NativeSelect
              inputProps={{
                name: "name",
                id: "uncontrolled-native",
              }}
              onChange={(e) => {
                filterByCity(e.target.value);
              }}
            >
              <option aria-label="None" value="" />
              <option value="">All</option>
              {uniqueCities.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
        </div>
        <div className={styles.single_select}>
          <FormControl className={styles.selects}>
            <InputLabel htmlFor="filled-age-native-simple">
              {t("type")}
            </InputLabel>
            <NativeSelect
              onChange={(e) => {
                filterByType(e.target.value);
              }}
            >
              <option aria-label="None" value="" />
              <option value="">All</option>
              {uniqueTypes.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Filter;
