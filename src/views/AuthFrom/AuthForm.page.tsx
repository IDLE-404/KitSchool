import React from "react";
import styles from "./style/Styles.module.css";

import BackgroundBoll from "./components/backgroundBoll/BackgroundBoll";

const AuthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBoll}>
        <BackgroundBoll />
      </div>
      <div></div>
    </div>
  );
};

export default AuthForm;
