import React from 'react'
import styles from '../../styles/Features/FeCards.module.css';
import RightMark from '../../svgFiles/rightMark';
import Content from '../../svgFiles/content';
import Skill from '../../svgFiles/skill';
import Format from '../../svgFiles/format';
import Style from '../../svgFiles/style';
import Resume from '../../svgFiles/resume';

export default function FeCards() {
    const data = [
        {
            key:1, 
            img: <Format />,
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"long bullet points with suggestions on how to shorten",
        },
        {
            key:2, 
            img: <Resume />,
            heading:"Resume Section",
            pt1:"Contact information",
            pt2:"Essential sections",
            pt3:"Personality showcase with tips on how to improve",
        },
        {
            key:3, 
            img: <Content />,
            heading:"Content",
            pt1:"ATS parse rate",
            pt2:"Spelling and grammar",
            pt3:"Quantifying impact in experience section with examples",
        },
        {
            key:4, 
            img: <Skill />,
            heading:"Skills suggestion",
            pt1:"Practice consistently",
            pt2:"Seek feedback",
            pt3:"Embrace every opportunity to learn and improve continuously.",
        },
        {
            key:5, 
            img: <Style />,
            heading:"Styles",
            pt1:"Resume design",
            pt2:"Email address",
            pt3:"Usage of active voice, buzzwords and clinches.",
        }
    ]
  return (
    <div className={styles.cardsWrapper}>
    <div class={styles.radialOne}></div>
    <div class={styles.radialTwo}></div>
        <div className={styles.cardsMain}>  
            <div className={styles.cardsHeading} data-aos="fade-up-right">Our AI-powered resume checker goes beyond typos and punctuationt</div>
            <div className={styles.cardsSubHeading} data-aos="fade-up-left">We’ve built-in Gemini to help you create a resume that’s tailored to the position you’re applying for. rtt</div>
            <div className={styles.cardsContainer} data-aos="flip-left">
                {data.map((item, index)=> (
                    <div className={styles.eachItem}>
                        {/* <img  className={styles.itemImg} src={item.img} alt="profile pic" /> */}
                        <div className={styles.itemImg}>{item.img}</div>
                        <div className={styles.itemHeading}>{item.heading}</div>
                        <ul className={styles.itemList}>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt1}</span></li>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt2}</span></li>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt3}</span></li>
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}
