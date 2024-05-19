import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Features/FeEvaluate.module.css';

export default function FeEvaluate() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.evaluateWrapper}>
        <div className={styles.evaluateMain}>
            <div className={styles.evaluateContain} data-aos="fade-right">
                <div className={styles.evaluateHeading}>Evaluate your resume with Intellirecruit</div>
                <Link onClick={scrollToTop} className={styles.evaluateLink} to="/product">Evaluate my resume</Link>
            </div>
        </div>
    </div>
  )
}
