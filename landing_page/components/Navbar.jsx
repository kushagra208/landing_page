import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import {GiHamburgerMenu} from 'react-icons/gi';
const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.container}>
      <a href='/'>Belgian Waffle</a>
      <button className={styles.hamburger}
      onClick = {() => {
        setIsNavExpanded(!isNavExpanded)
      }}
      >
        <GiHamburgerMenu size={25}/>
      </button>
        
      <ul className={isNavExpanded ? styles.listexpanded : styles.list }>
        <li className = {styles.listItem}>
          <a href = '/' target="_blank" >Home</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/about-us' target="_blank">About Us</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/our-products' target="_blank">Our Products</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/gallery' target="_blank">Gallery</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/franchise' target="_blank" >Franchise</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/store-locator' target="_blank" >Store Locator</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/events-and-catering' target="_blank" >Events & Catering</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/contact' target="_blank" >Contact Us</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar