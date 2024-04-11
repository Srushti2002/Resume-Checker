import React from 'react';
import styles from '../../styles/Features/FeQuotes.module.css';
import ReviewImg from '../../images/reviewImg.png';
import { Link } from 'react-router-dom';

export default function FeQuotes() {
  return (
    <div className={styles.quoteWrapper}>
        <div className={styles.quoteMain}>
            <div className={styles.quoteContainer}>
                <div className={styles.quoteCarousel}></div>
                <div className={styles.quoteText}>
                    <div className={styles.quoteHeading}>Your resume is an extension of yourself -make one that’s truly you</div>
                    <Link className={styles.quoteButton}>Know more</Link>
                    <img className={styles.quoteReview} src={ReviewImg} alt="review Img" />
                </div>
            </div>
        </div>
    </div>
  )
}
