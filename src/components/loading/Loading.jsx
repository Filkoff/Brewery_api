import React from "react";
import styles from "./Loading.module.scss";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.loading}>
      <h1 className={styles.loading__header}>{t("loading")}</h1>
    </div>
  );
};

export default Loading;
