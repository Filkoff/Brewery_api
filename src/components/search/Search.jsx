import React, { useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.scss";

const Search = () => {
  const searchUrl = "https://api.openbrewerydb.org/breweries/search?query=";
  const [searchValue, setSearchValue] = useState("");

  const { t } = useTranslation();

  const { setBreweries, setLoading } = useContext(AppContext);

  const inputSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${searchUrl}${searchValue}`);
      const data = await response.json();
      setBreweries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSearchValue("");
    }
  };

  return (
    <div className={styles.search}>
      <TextField
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
      />
      <Button
        startIcon={<SearchIcon />}
        onClick={inputSearch}
        type="submit"
        variant="outlined"
        color="primary"
        size="small"
      >
        {t("button1")}
      </Button>
    </div>
  );
};

export default Search;
