import styles from "./App.module.scss";
import Breweries from "./components/breweries/Breweries";
import Loading from "./components/loading/Loading";
import Filter from "./components/filter/Filter";
import { AppContext } from "./components/context/context";
import { useContext } from "react";

function App() {
  const { breweries, loading } = useContext(AppContext);

  return (
    <div className={styles.App}>
      {loading ? <Loading /> : null}
      <h1>Breweries search</h1>
      <Filter />
      <Breweries breweries={breweries} />
    </div>
  );
}

export default App;
