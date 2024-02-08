import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom';
// import 'aos/dist/aos.css'
// import AOS from 'aos'


export default function Navigation() {

  return (
    
    <nav className={styles.navWrapper}>
            <div className={styles.menu}>
                <div className={styles.heading}>Intellirecruit</div>
                <div className={styles.menuList}>
                    <ul className={styles.menuItemList}>
                        <li>
                        <Link className={styles.linkStyle} to="/">Home</Link>
                        </li>
                        <li>
                        <Link  className={styles.linkStyle} to="/features">Features</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link className={`${styles.linkStyle} ${styles.signup}`} to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>    
    </nav>
  )
}
