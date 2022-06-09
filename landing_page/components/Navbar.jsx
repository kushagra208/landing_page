import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href='/'>Belgian Waffle</a>
      <ul className={styles.list}>
        <li className = {styles.listItem}>
          <a href = '/products/design' >Home</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/development' >About Us</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/production' >Our Products</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/photography' >Gallery</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/contact' >Franchise</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/contact' >Store Locator</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/contact' >Events & Catering</a>
        </li>
        <li className = {styles.listItem}>
          <a href = '/products/contact' >Contact Us</a>
        </li>
      </ul>

    </div>
  )
}

export default Navbar