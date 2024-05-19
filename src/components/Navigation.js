import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import AOS from 'aos'
import IntelLogo from '../svgFiles/intelLogo';
import LinkedInLogo from '../svgFiles/linkedInLogo';
import TwitterLogo from '../svgFiles/twitterLogo';
import YouTubeLogo from '../svgFiles/youTubeLogo';


export default function Navigation() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);

  return (
    <nav className={styles.navWrapper}>
            <div className={styles.menu} data-aos="fade-down">
                <div className={styles.heading}><IntelLogo />Intellirecruit</div>
                <div className={styles.menuList}>
                    <ul className={styles.menuItemList}>
                        <li>
                        <Link className={styles.linkStyle} to="/">Home</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/features">Features</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/product">Product</Link>
                        </li>
                        
                    </ul>
                    <ul className={styles.menuItemListIcon}>
                      <li>
                      <Link target="_blank" className={styles.linkStyle} to="https://www.linkedin.com/company/gbj-buzz/?originalSubdomain=in"><LinkedInLogo /></Link>
                      </li>
                      <li>
                      <Link target="_blank" className={styles.linkStyle} to="https://www.bing.com/ck/a?!&&p=a9f293e8754b8a33JmltdHM9MTcxNjA3NjgwMCZpZ3VpZD0xNjAyM2JhOS05NTcxLTYzM2UtMThhNy0yYTc2OTRkNzYyZDAmaW5zaWQ9NTE5OQ&ptn=3&ver=2&hsh=3&fclid=16023ba9-9571-633e-18a7-2a7694d762d0&psq=twitter+gbj+buzz&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS9nYmpidXp6&ntb=1"><TwitterLogo /></Link>
                      </li>
                      <li>
                      <Link target="_blank" className={styles.linkStyle} to="https://youtu.be/FGJ6Xpu32nw?si=QiXFGUPDkIGBNO61"><YouTubeLogo /></Link>
                      </li>
                    </ul>
                    
                    
                </div>
            </div>    
    </nav>
  )
}
