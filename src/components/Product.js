import React, {useState } from 'react';
import img1 from '../images/productImgOne.png';
import { ReactComponent as TickMark } from '../svgFiles/tickMarkLogo.svg';
import styles from '../styles/Product.module.css';
import { useDropzone } from 'react-dropzone';

const items = ["Simplify interview coordination with automated scheduling tools, reducing administrative workload.",
              " Match candidates to job requirements seamlessly, saving time and  improving hiring accuracy.",
            "Evaluate candidate skills objectively with AI-powered assessments tailored to your job requirements."]

export default function Product() {

  const [activeTab, setActiveTab] = useState('option1');
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);


  const handleApply = () => {
    console.log("job description", jobDescription);
    console.log("Uploaded resume", resume);
  }

  const handlePreviewResume = () => {
    if(resume) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;
        window.open(url, '_blank');
      }
      reader.readAsDataURL(resume);
    }
  };

  const handleClear = () => {
    setJobDescription('');
    setResume(null);
  }

  const handleTellAbtRes = () => {
    //add the logic(code) here for tell me abt yourself button
    console.log("Analyzing resume...");
  }

  const handleImproveSkill = () => {
    //add the logic(code) here for improve skills button
    console.log("Imporve your skills.....");
  }

  const handlePerMatch = () => {
    //add the logic(code) here for percentage match button
    console.log("Percentage match....");
  }

  const onDrop = (acceptedFiles) => {
    setResume(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, 
    accept: 'application/pdf'
  });

  return (
    <div className={styles.productWrapper}>
        <div className={styles.productMain}>    
            <div className={styles.productLeft}>
                <div className={styles.leftTabMenu}>
                    <button onClick={() => setActiveTab('option1')} className={activeTab === 'option1' ? styles.active : ''}>1. Add Resume</button>
                    <button onClick={() => setActiveTab('option2')} className={activeTab === 'option2' ? styles.active : ''}>2. Save Resume</button>
                    <button onClick={() => setActiveTab('option3')} className={activeTab === 'option3' ? styles.active : ''}>3. Create Resume</button>
                </div>
                <div className={styles.leftTabContent}>
                    {activeTab === 'option1' && (
                        <div className={styles.tabOneWrapper}>
                          <div className={styles.addResumeBlock}>
                            <div className={styles.addResumeBlockHeading}>Add Your Resume</div>
                            <div className={styles.addResumeBlockText}>Use our Uploader to save your resume and reach thousands of  
                            active Employers.</div>
                          </div>

                          <div className={styles.jobDescribeBlock}>
                            <label>Job Description</label>
                            <textarea 
                            placeholder= "Describe your job desciption as mentioned in the JD section "
                            value={jobDescription} 
                            onChange={(e) => setJobDescription(e.target.value)} />
                          </div>

                          <div className={styles.uploadResumeBlock}>
                            <label>Upload Resume</label>
                            <div className={styles.uploadResumeBlockText}>
                            {/* Drag and drop area */}
                            <div {...getRootProps()} className={styles.dropzone}>
                              <p className={styles.uploadResumeBlockInput} >Drag 'n' drop PDF files here, or click to select files</p>
        
                              <input {...getInputProps()} />
                            </div>
                            {resume && <p>Resume Uploaded : {resume.name} </p>}
                            </div>
                          
                          <div className={styles.uploadResumeBlockButton}>
                            <button onClick={handleApply}>Apply</button>
                            <button onClick={handlePreviewResume}>Preview Resume</button>
                            <button onClick={handleClear}>Clear</button>
                          </div>
                          </div>

                          <div className={styles.addResumeButtons}>
                            <button onClick={handleTellAbtRes}>Tell me about the resume</button>
                            <button onClick={handleImproveSkill}>How can I improve my skills</button>
                            <button onClick={handlePerMatch}>Percentage match</button>
                          </div>
                        
                        </div>
                    )}

                    {activeTab === 'option2' && (
                        <div className={styles.tabTwoWrapper}>Save Resume</div>
                    )}

                    {activeTab === 'option3' && (
                        <div className={styles.tabThreeWrapper}>Create Resume</div>
                    )}
                </div>
            </div>
            <div className={styles.productRight}>
              <img src={img1} />
              <div className={styles.rightHeading}>Unlock the Power of Gen AI for Your Recruitment Needs</div>
              <div className={styles.rightContent}>
                {items.map((item) => ( 
                  <div className={styles.rightContentText} 
                  key={item.id}>
                    <TickMark />
                    <div className={styles.rightContentTextPoints}>{item}</div>  
                  </div>
                )
                )}
              </div>
            </div>
        </div>  
    </div>
  )
};

  
