import styles from "./style/Styles.module.css"
import React from 'react'

const backgroundBoll = () => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>KITSCHOOL</span>
      <div className={styles.boll}></div>
    </div>
  )
}

export default backgroundBoll