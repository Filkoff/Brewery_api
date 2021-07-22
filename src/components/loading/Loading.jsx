import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h1 className={styles.loading__header}>Loading</h1>
    </div>
  );
};

export default Loading;
