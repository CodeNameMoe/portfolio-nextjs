import React from 'react';
import {useEffect} from "react";
import styles from "../styles/Filter.module.css"


function Filter({order, setFiltred, activeStack, setActiveStack}) {
  
    useEffect(() => {
        if (activeStack === "all" ){
          setFiltred(order);
          return;
        }
        const filtered = order.filter((project) => project.stackId.includes(activeStack))
        setFiltred(filtered);
    }, [activeStack])

  return (
    <div className={styles.filterContainer}>
        <button onClick={() => setActiveStack("all")} className={styles.btn} >All</button>
        <button onClick={() => setActiveStack("front")} className={styles.btn} >Front-End</button>
        <button onClick={() => setActiveStack("full")} className={styles.btn}>Full-Stack</button>
        <button onClick={() => setActiveStack("back")} className={styles.btn}>Backend</button>
    </div>
  )
}

export default Filter