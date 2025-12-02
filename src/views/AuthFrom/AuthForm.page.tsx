import React from "react";
import styles from "./style/Styles.module.css";
import partOne from "../../../public/png/authForm/formregister.png";
import BackgroundBoll from "./components/backgroundBoll/BackgroundBoll";

const AuthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerForms}>
        <div className={styles.backgroundBoll}>
          <BackgroundBoll />
        </div>
        <div className={styles.registerForm}>
          <div className={styles.leftBox}></div>
          <div className={styles.rightBox}>
            <div className={styles.boxWellcome}>
              <div className={styles.logo}></div>
              <div className={styles.boxWellcome}>
                <span className={styles.titleWellcome}>
                  Начни свой путь в IT
                </span>
                <p className={styles.textWellcome}>
                  Наша платформа поможет вам войти в мир программирования и
                  найти единомышленников{" "}
                </p>
              </div>
            </div>
            <form action="" className={styles.formItem}>
              <div className={styles.groupInput}>
                <label htmlFor="">Логин</label>
                <input type="text" />
              </div>
              <div className={styles.groupInput}>
                <label htmlFor="">Почта</label>
                <input type="text" />
              </div>
              <div className={styles.groupInput}>
                <label htmlFor="">Пароль</label>
                <input type="text" />
              </div>
              <div className={styles.groupInput}>
                <label htmlFor="">Подтверждение пароля</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
