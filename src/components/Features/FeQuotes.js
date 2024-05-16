import React from 'react';
import styles from '../../styles/Features/FeQuotes.module.css';
import ReviewImg from '../../images/reviewImg.png';
import { Link } from 'react-router-dom';
import Img1 from '../../images/quoteImg1.jpeg';
import Img2 from '../../images/quoteImg2.jpg';
import Img3 from '../../images/quoteImg3.jpg';
import {useState, useEffect} from 'react';

export default function FeQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setIndex((prevIndex)=> (prevIndex === data.length -1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      id: 1,
      image: Img1,
      content: `IntelliRecruit revolutionized our hiring process! We're consistently finding top-tier candidates who align perfectly with our company culture and requirements.`,
      name: 'JENICA SMITH',
      post: 'SOLUTION ENGINEER',
      company: "Udemy",
    },
    {
      id: 2,
      image: Img2,
      content: `As an HR professional, I've never seen such effective resumes. Thanks to IntelliRecruit, we're saving time and resources while attracting top talent effortlessly.`,
      name: 'EMILY JOHNSON',
      post: 'HR MANAGER',
      company: "Coursera",
    },
    {
      id: 3,
      image: Img3,
      content: 'Using IntelliRecruit was a game-changer for us. Our recruitment efforts have become more targeted, resulting in faster hires and increased productivity across the board.',
      name: 'DOROTHY LEE',
      post: 'HR DIRECTOR',
      company: "Udacity",
    },
  ];
  
  return (
    <div className={styles.quoteWrapper}>
        <div className={styles.quoteMain}>
            <div className={styles.quoteContainer} data-aos="flip-up">
                <div className={styles.quoteCarousel}>
                  <div className={styles.slides}>
                    {data.map((item, idx)=> (
                      <div
                      key={item.id}
                      className={idx === index ? styles.slideActive : styles.slide}>
                        <img  className={styles.slideImg} src={item.image} alt="Img" />
                        <div className={styles.slideContent}>{item.content}</div>
                        <div className={styles.slideName}>{item.name}</div>
                        <div className={styles.slidePost}>{item.post}</div>
                        <div className={styles.slideLine}></div>
                        <div className={styles.slideUdemy}>{item.company}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.carouselIndicator}>
                  {data.map((_, i) => (
                    <div
                      key={i}
                      className={i === index ? styles.indicatorActive : styles.indicator}
                    />
                  ))}
                  </div>
                </div>
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
