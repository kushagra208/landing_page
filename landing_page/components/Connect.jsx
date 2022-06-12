import React from 'react'
import styles from '../styles/Connect.module.css';
import {AiOutlineFacebook ,AiOutlineInstagram , AiOutlineTwitter, AiOutlineLinkedin , AiOutlineYoutube} from 'react-icons/ai'
const Connect = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <span className={styles.before} />
            <h1 className={styles.title}>
                Connect with us
            </h1>
            <span className={styles.after} />
        </div>
        <div className={styles.wrapper}>
            <div className={styles.wrapper_a}>
                <h3>Contact Us</h3>
                For general queries:
                <br/>
                <a href='mailto:info@bloombay.in'>info@bloombay.in</a>
                <br/>
                For franchise queries:
                <br/>
                <a href='mailto:franchise@bloombay.in' >franchise@bloombay.in</a>
            
                <h3>Locate Us</h3>
                Bloombay Enterprises Pvt. Ltd.,<br/>
                Gupta Mills Estate,<br/>
                Reay Road, Darukhana,<br/>
                Mumbai- 400010
            </div>
            <div className={styles.wrapper_b}>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href='/terms-conditions/'>Terms & Conditions</a></li>
                    <li><a href='/careers/'>Careers</a></li>
                    <li><a href='/events-catering/'>Events & Catering</a></li>
                    <li><a href='/store-locator/'>Store Locator</a></li>
                    <li><a href='/sitemap/'>Sitemap</a></li>
                </ul>
                <h3>Follow Us</h3>
                <ul className={styles.list}>
                    <li>
                        <a href='https://www.facebook.com/thebelgianwafflecoindia'><AiOutlineFacebook size={30} /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/thebelgianwaffleco/?hl=en'><AiOutlineInstagram size={30} /></a>
                    </li>
                    <li>
                        <a href='https://twitter.com/belgianwaffleco'><AiOutlineTwitter size={30} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/company/the-belgian-waffle-co'><AiOutlineLinkedin size={30} /></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UC5Y_cWA4XARNWORS71EIchQ'><AiOutlineYoutube size={30} /></a>
                    </li>
                </ul>         
            </div>
            <div className={styles.wrapper_c}>
                

            </div>
        </div>
        

    </div>
  )
}

export default Connect