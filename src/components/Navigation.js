import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom';
import IntelLogo from '../svgFiles/intelLogo';

export default function Navigation() {

  return (
    <nav className={styles.navWrapper}>
            <div className={styles.menu}>
                <div className={styles.heading}><IntelLogo />Intellirecruit</div>
                <div className={styles.menuList}>
                    <ul className={styles.menuItemList}>
                        <li>
                        <Link className={styles.linkStyle} to="/">Home</Link>
                        </li>
                        <li>
                        <Link  className={styles.linkStyle} to="/features">About us</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/contact">Product</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/contact">Features</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>    
    </nav>
  )
}
