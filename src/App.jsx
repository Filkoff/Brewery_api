import styles from "./App.module.scss";
import Breweries from "./components/breweries/Breweries";
import Loading from "./components/loading/Loading";
import Filter from "./components/filter/Filter";
import { AppContext } from "./components/context/context";
import { useContext } from "react";

function App() {
  const { breweries, loading } = useContext(AppContext);

  if (loading)
    return (
      <div className={styles.App}>
        <Loading />
      </div>
    );

  return (
    <div className={styles.App}>
      <h1>Breweries search</h1>
      <Filter />
      <Breweries breweries={breweries} />
    </div>
  );
}

export default App;
