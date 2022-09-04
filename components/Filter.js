import React from 'react';
import {useEffect} from "react";
import styles from "../styles/Filter.module.css"


function Filter() {
  return (
    <div className={styles.filterContainer}>
        <button className={styles.btn}>All</button>
        <button className={styles.btn}>Front-End</button>
        <button className={styles.btn}>Full-Stack</button>
        <button className={styles.btn}>Backend</button>
    </div>
  )
}

export default Filter