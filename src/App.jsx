import styles from "./App.module.scss";
import Breweries from "./components/breweries/Breweries";
import Loading from "./components/loading/Loading";
import Filter from "./components/filter/Filter";
import { AppContext } from "./components/context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NativeSelect, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  const { breweries, loading } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.App}>
      <div className={styles.language}>
        <NativeSelect onChange={(e) => changeLanguage(e.target.value)}>
          <option value={"ru"}>RU</option>
          <option value={"en"}>EN</option>
        </NativeSelect>
      </div>
      {loading ? <Loading /> : null}
      <Typography variant="h3">{t("title")}</Typography>
      <Filter />
      <Breweries breweries={breweries} />
    </div>
  );
}

export default App;
