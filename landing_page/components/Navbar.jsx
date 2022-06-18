import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import Link from 'next/link';
const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.container}>
      <Link href='/'>Belgian Waffle</Link>
      <button className={styles.hamburger}
      onClick = {() => {
        setIsNavExpanded(!isNavExpanded)
      }}
      >
        <GiHamburgerMenu size={25}/>
      </button>
        
      <ul className={isNavExpanded ? styles.listexpanded : styles.list }>
        <li className = {styles.listItem}>
          <Link href = '/' target="_blank" >Home</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/about-us' target="_blank">About Us</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/our-products' target="_blank">Our Products</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/gallery' target="_blank">Gallery</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/franchise' target="_blank" >Franchise</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/store-locator' target="_blank" >Store Locator</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/events-and-catering' target="_blank" >Events & Catering</Link>
        </li>
        <li className = {styles.listItem}>
          <Link href = '/products/contact' target="_blank" >Contact Us</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar