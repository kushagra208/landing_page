import React from 'react'
import styles from '../styles/Connect.module.css';
import {AiOutlineFacebook ,AiOutlineInstagram , AiOutlineTwitter, AiOutlineLinkedin , AiOutlineYoutube} from 'react-icons/ai'
import Link from 'next/link';
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
                <Link href='mailto:info@bloombay.in'>info@bloombay.in</Link>
                <br/>
                For franchise queries:
                <br/>
                <Link href='mailto:franchise@bloombay.in' >franchise@bloombay.in</Link>
            
                <h3>Locate Us</h3>
                Bloombay Enterprises Pvt. Ltd.,<br/>
                Gupta Mills Estate,<br/>
                Reay Road, Darukhana,<br/>
                Mumbai- 400010
            </div>
            <div className={styles.wrapper_b}>
                <h3>Quick Links</h3>
                <ul>
                    <li><Link href='/terms-conditions/'>Terms & Conditions</Link></li>
                    <li><Link href='/careers/'>Careers</Link></li>
                    <li><Link href='/events-catering/'>Events & Catering</Link></li>
                    <li><Link href='/store-locator/'>Store Locator</Link></li>
                    <li><Link href='/sitemap/'>Sitemap</Link></li>
                </ul>
                <h3>Follow Us</h3>
                <ul className={styles.list}>
                    <li>
                        <Link href='https://www.facebook.com/thebelgianwafflecoindia'><AiOutlineFacebook size={30} /></Link>
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/thebelgianwaffleco/?hl=en'><AiOutlineInstagram size={30} /></Link>
                    </li>
                    <li>
                        <Link href='https://twitter.com/belgianwaffleco'><AiOutlineTwitter size={30} /></Link>
                    </li>
                    <li>
                        <Link href='https://www.linkedin.com/company/the-belgian-waffle-co'><AiOutlineLinkedin size={30} /></Link>
                    </li>
                    <li>
                        <Link href='https://www.youtube.com/channel/UC5Y_cWA4XARNWORS71EIchQ'><AiOutlineYoutube size={30} /></Link>
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