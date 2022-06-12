import React from 'react'
import styles from '../styles/Counter.module.css';
const Counter = () => {
  return (
    <div className={styles.container}>

        <div className={styles.wrap} >
            <span className={styles.stats}>40000+</span>
            <br/>
            Waffles Sold Per Day 
        </div>
        <div className={styles.wrap} >
        <span className={styles.stats}>300+</span>
            <br/>
            Stores
        </div>
        <div className={styles.wrap}>
        <span className={styles.stats}>100+</span>
            <br/>
            Cities
        </div>
    </div>
  )
}

export default Counter