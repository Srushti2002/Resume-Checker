import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Product.module.css';
import Upload from '../svgFiles/upload.js';
import 'aos/dist/aos.css'
import AOS from 'aos'

export default function Product() { 
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, []);

      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [response, setResponse] = useState('');

  const handleTellMeAboutResumeClick = async () => {
    // Create FormData object to  send resume file
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resume);

    try {
      // Send data to Flask backend
      const result = await axios.post('http://127.0.0.1:8000/tell_me_about_resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Set response received from backend
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePercentageMatchClick = async () => {
    // Create FormData object to send resume file
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resume);

    try {
      // Send data to the backend for "percentage_match" endpoint
      const result = await axios.post('http://127.0.0.1:8000/percentage_match', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Set response received from backend
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className={styles.productWrapper}>
      <div className={styles.productMain}>
      <div className={styles.productSecFirst} data-aos="fade-left">
        <div className={styles.productFirstHead}>Add Your Resume</div>
        <div className={styles.productFirstContent}>Paste Your JD and upload your resume to get started.</div>
      </div>
      <div className={styles.productSecSecond} data-aos="fade-right">
        <label className={styles.productSecondHead}>Job Description</label>
        <textarea className={styles.productSecondContent} 
        value={jobDescription} 
        rows={9} 
        placeholder="Paste Your Job Description" onChange={(e) => setJobDescription(e.target.value)} />
      </div>
      <div className={styles.productSecThird}  data-aos="fade-right">
        <label className={styles.productThirdHead}>Upload Your Resume (PDF Format)</label>
        <div className={styles.productThirdContent}>
          <input className={styles.productThirdInput} type="file" accept=".pdf" 
          onChange={(e) => setResume(e.target.files[0])} />
          <div className={styles.dragDrop}>
            <Upload className={styles.dragDropSign} />
            <div className={styles.dragDropText}>
            {resume ?
              <div className={styles.dragDropUploaded}>Resume uploaded</div>:
              <div className={styles.dragDropTextTop}>Drag and drop the file here</div>
            }
              <div className={styles.dragDropTextBottom}>Limit 20 MB per file : PDF</div>
            </div>
            
            <button className={styles.dragDropButton}>Browse Files</button>
          </div>
        </div>
      </div>
      <div className={styles.productSecFourth} data-aos="fade-up">
        <button className={styles.productFourthButton} onClick={handleTellMeAboutResumeClick}>Tell Me About Resume</button>
        <button className={styles.productFourthButton} onClick={handlePercentageMatchClick}>Percentage Match</button>
      </div>
      <div className={styles.productSecFifth}>
        {response && <p className={styles.productResponse}>{response}</p>}
      </div>

      </div>
    </div>
  );
}

