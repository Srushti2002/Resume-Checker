import React from 'react';
import { Link } from 'react-router-dom';
import IntelFooterLogo from '../svgFiles/intelFooterLogo';
import LinkedInLogo from '../svgFiles/linkedInLogo';
import TwitterLogo from '../svgFiles/twitterLogo';
import YouTubeLogo from '../svgFiles/youTubeLogo';
import styles from '../styles/Footer.module.css';


export default function Footer() {
    const data = [
        {key:1,
        heading:"Category",
        listOne: "Tools",
        listTwo: "Features",
        listThree: "History",
        listFour: "Account",
        linkOne:"https://www.indeed.com/hire/c/info/ats-software-tools-for-your-business",
        linkTwo:"https://www.techtarget.com/searchhrsoftware/tip/Applicant-tracking-system-features-to-look-for",
        linkThree:"https://www.onblick.com/blogs/the-evolution-of-applicant-tracking-system-a-historical-perspective",
        linkFour:"https://gbjbuzz.com/career",
        },
        {key:2,
        heading:"Resources",
        listOne: "Blogs",
        listTwo: "Articles",
        listThree: "Video",
        listFour: "Research",
        linkOne:"https://medium.com/@mr.gbjbuzz/gbj-buzz-igniting-business-evolution-and-fueling-expansion-opportunities-b713e43316ea",
        linkTwo:"https://medium.com/@mr.gbjbuzz/breaking-through-boundaries-how-gbj-buzz-transforms-stagnant-businesses-into-success-stories-ccd806c5f79d",
        linkThree:"https://youtu.be/Hw2nGZtoOhc?si=qL1Y0vJny0gafzeW",
        linkFour:"",
        },
        {key:3,
        heading:"Company",
        listOne: "Contact us",
        listTwo: "About us",
        listThree: "Parent Company",
        listFour: "Login",
        linkOne:"https://gbjbuzz.com/contact",
        linkTwo:"https://gbjbuzz.com/about-us",
        linkThree:"https://gbjbuzz.com/",
        linkFour:"https://gbjbuzz.com/career",
        }
    ]
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerMain} data-aos="fade-up">
            <div className={styles.footerTop}>
                <div className={styles.footerTopLeft}>
                    <div className={styles.topLeftMainHead}><IntelFooterLogo />Intellirecruit</div>
                    <div className={styles.topLeftMainContent}>Utilizing Google Gemini Pro and Large Language Models (LLM), Intellirecruit offers precise resume analysis, strategic skill enhancement recommendations, and seamless integration with Applicant Tracking Systems (ATS). Gain a competitive edge in the job market while making informed career decisions effortlessly. Experience efficiency, insights, and strategic advantage like never before with Intellirecruit.</div>
                </div>
                <div className={styles.footerTopRight}>
                    {data.map((item, key)=> (
                        <div className={styles.topRightList}>
                            <div className={styles.topRightListHeading}>{item.heading}</div>
                            <ul className={styles.topRightListMain}>
                                <li><Link to={item.linkOne} className={styles.listItem}>{item.listOne}</Link></li>
                                <li><Link to={item.linkTwo} className={styles.listItem}>{item.listTwo}</Link></li>
                                <li><Link to={item.linkThree} className={styles.listItem}>{item.listThree}</Link></li>
                                <li><Link to={item.linkFour} className={styles.listItem}>{item.listFour}</Link></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomHandles}>
                    <Link href="" className={styles.footerLinkedIn}><LinkedInLogo /></Link>
                    <Link href="https://twitter.com/gbjbuzz" className={styles.footerTwitter}><TwitterLogo /></Link>
                    <Link href="https://youtu.be/FGJ6Xpu32nw?si=QiXFGUPDkIGBNO61" className={styles.footerYouTube}><YouTubeLogo /></Link>
                </div>
                <div className={styles.footerBottomLine}></div>
                <div className={styles.footerBottomCopyright}>
                    <div className={styles.footerRights}>Copyright © 2024 Intellirecruit. All rights reserved.</div>
                    <div className={styles.footerPolicy}>Terms of Use & Privacy Policy</div>
                </div>
            </div>
        </div>
    </div>
  )
}
