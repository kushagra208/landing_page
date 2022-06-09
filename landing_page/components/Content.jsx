import React from 'react'
import styles from '../styles/Content.module.css'
const Content = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>
            Best food franchise business in India
        </h1>
        <h1 className={styles.subtitle}>
            <span className={styles.before} />
            Our Story
            <span className={styles.after} />
        </h1>
        </div>
        <div className={styles.wrap}>
        <div className={styles.text}>
            A burning passion for quality, consistency, novelty and adding value in the QSR space is the reason that our food franchise, The Belgian Waffle Co., came to being.
            <br/>
            <br/>
            Owned and operated by Bloombay Enterprises Pvt. Ltd., The Belgian Waffle Co. was an idea born out of passion and with a mission to spread taste and delight. Founded in 2015, our story unfolded when Shrey, while working internationally, started discovering the various interesting food concepts which were available globally. The concept of freshly baked waffles being offered by an on-the-go waffle restaurant in India particularly attracted him.
            <br/>
            <br/>
            He saw tremendous potential to bring the product to India in a big way, customized in an easy to eat, entirely vegetarian and affordable format which led to the birth of The Belgian Waffle Co.
            <br/>
            <br/>
            The Belgian Waffle Co. franchise is one of the first waffle specialty stations in India that offers a unique, on-the-go waffle sandwich created fresh at our waffle stations with our specially formulated egg-less batter and premium fillings.

        </div>
        <div className={styles.text}>
            Our waffles are freshly baked, hot and crispy and come in a variety of batters and fillings!
            <br/>
            <br/>
            After the tremendous love and loyalty we garnered across age groups, we were keen for our fellow wafflers to enjoy our unique flavours and tastes from the comfort of their homes. This naturally led to our foray into the FMCG segment with our ready to eat range. In 2021, we launched our range of retail products – Pancake and Waffle Premixes, Waffle Crisps and a range of Spreads. All products are eggless, contain no preservatives and offer something unique to our  devoted patrons across the country.
            <br/>
            <br/>
            We pride ourselves on continuous innovation while at the same time maintaining a consistent top quality product with a warm and dependable brand identity.
        </div>
        
        </div>
        <button type='button' className = {styles.button}  >Know More</button>
        
    </div>
  )
}

export default Content