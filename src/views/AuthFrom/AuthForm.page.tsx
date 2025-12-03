import React from "react";
import styles from "./style/Styles.module.css";
import BackgroundBoll from "./components/backgroundBoll/BackgroundBoll";

const AuthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBoll}>
        <BackgroundBoll />
      </div>
      <div className={styles.containerForms}>
        <div className={styles.registerForm}>
          <div className={styles.leftBox}>
            <div className={styles.leftContent}>
              <span className={styles.tag}>Наставник рядом</span>
              <span className={styles.leftTitle}>
                Практика, поддержка и комьюнити в одном месте
              </span>
              <p className={styles.leftText}>
                Интенсивные программы, чтобы плавно войти в IT: живые сессии,
                домашки, быстрые проверки и трек роста.
              </p>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.boxWellcome}>
              <span className={styles.kicker}>KITSCHOOL</span>
              <span className={styles.titleWellcome}>Начни свой путь в IT</span>
              <p className={styles.textWellcome}>
                Наша платформа поможет вам войти в мир программирования и найти
                единомышленников
              </p>
            </div>
            <div className={styles.containerRole}>
              <div className={styles.titleRole}>
                <span>Ваша роль</span>
              </div>
              <div className={styles.boxBtnRole}>
                <button className={styles.btnRole}>Ученик</button>
                <button className={styles.btnRole}>Учитель</button>
                <button className={styles.btnRole}>Админ</button>
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
              <button className={styles.submitButton} type="submit">
                Создать аккаунт
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
