import React from 'react';
import Custom from '../../images/custom.png';
import Typo from '../../images/typo.png';
import Summary from '../../images/summary.png';
import Results from '../../images/results.png';
import Choice from '../../images/choice.png';
import Format from '../../images/format.png';
import styles from '../../styles/Features/FeCheck.module.css';


export default function FeCheck() {
    const data = [
        {
            key:1,
            image: Custom,
            heading: "Customization",
            para: "Ensure tailored content to match job requirements."

        },
        {
            key:2,
            image: Typo,
            heading: "Typos",
            para: "Detect and correct spelling and grammatical errors."

        },
        {
            key:3,
            image: Summary,
            heading: "Strong Summary",
            para: "Craft a compelling and concise career overview."

        },
        {
            key:4,
            image: Results,
            heading: "Measurable Results",
            para: "Emphasize quantifiable achievements for impact."

        },
        {
            key:5,
            image: Choice,
            heading: "Word Choice",
            para: "Optimize language for clarity and professionalism."

        },
        {
            key:6,
            image: Format,
            heading: "Formatting",
            para: "Ensure consistent and visually appealing layout."

        }
    ]
  return (
    <div className={styles.checkWrapper}>
        <div className={styles.checkMain}>
            <div className={styles.checkHeading} data-aos="fade-up-right">What we Check::</div>
            <div className={styles.checkSubHeading} data-aos="fade-up-left">Whether you are updating or building a new one Resume Check will help.</div>
            <div className={styles.checkCards} data-aos="flip-right">
            {data.map((item) => (
                <div key={item.key} className={styles.eachCard}>
                <div className={styles.cardFront}>
                    <img className={styles.cardImg} src={item.image} alt={item.heading} />
                    <div className={styles.cardHeading}>{item.heading}</div>
                </div>
                <div className={styles.cardBack}>
                    <p className={styles.cardText}>{item.para}</p>
                </div>
                </div>
      ))}
    </div>

        </div>
    </div>
  )
}
