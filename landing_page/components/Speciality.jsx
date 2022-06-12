import React from 'react';
import styles from '../styles/Speciality.module.css';
const Speciality = () => {
  return (
    <div className={styles.container}>
        
            <h1 className={styles.title} >
                Our Speciality
            </h1>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <img className={styles.image} src='https://thebelgianwaffle.co/wp-content/uploads/2018/09/Artboard-1-copy-6-300x300.png' />
          <img className={styles.image} src='https://thebelgianwaffle.co/wp-content/uploads/2018/09/Artboard-1-copy-7-300x300.png' />
        </div>
        <div className={styles.wrap}>
          <img className={styles.image} src='https://thebelgianwaffle.co/wp-content/uploads/2018/09/Artboard-1-copy-4-300x300.png' />
          <img className={styles.image} src='https://thebelgianwaffle.co/wp-content/uploads/2018/09/Artboard-1-copy-5-300x300.png' />
        </div>
        </div>
        <button type='button' className = {styles.button}  >See Our Full Menu</button>
        
        </div>
  )
}

export default Speciality