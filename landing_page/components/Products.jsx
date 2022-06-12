import React from 'react';
import styles from '../styles/Products.module.css';
const Products = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} >
                Our Products
            </h1>
        <img src = 'https://thebelgianwaffle.co/wp-content/uploads/2022/02/BWC-Products1-2048x1092.png' className={styles.image}>
        </img>
        
    </div>
  )
}

export default Products