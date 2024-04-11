import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests, install axios if not already installed
import { getDocument } from 'pdfjs-dist';

const Product = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    };

    const extractTextFromPDF = async (pdfData) => {
        const pdf = await getDocument({ data: pdfData }).promise;
        let resumeText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(' ');
            resumeText += pageText;
        }
        return resumeText;
    };

    const handleResumeFileChange = async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = async (e) => {
          const pdfData = new Uint8Array(e.target.result);
          try {
              const resumeText = await extractTextFromPDF(pdfData);
              setResumeFile(resumeText);
          } catch (error) {
              console.error('Error extracting text from PDF:', error);
              // Handle the error, such as displaying an error message to the user
          }
      };
      
      reader.readAsArrayBuffer(file);
  };
  

    const handleQuestionClick = async (question) => {
        setQuestion(question);

        // Send HTTP request to backend API
        try {
            const response = await axios.post('Enter_the _url', {
                jobDescription: jobDescription,
                resumeText: resumeFile,
                question: question
            });
            setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
        } catch (error) {
            console.error('Error:', error);
            setAnswer('Error occurred. Please try again later.');
        }
    };

    return (
        <div style={{backgroundColor:'black'}}>
            <div>
                <label>Job Description:</label>
                <textarea value={jobDescription} onChange={handleJobDescriptionChange} />
            </div>
            <div>
                <label>Upload Resume:</label>
                <input type="file" accept=".pdf" onChange={handleResumeFileChange} />
            </div>
            <div>
                <button onClick={() => handleQuestionClick('tell me about the uploaded resume how well its matching with the job description')}>
                    Tell me about the resume
                </button>
                <button onClick={() => handleQuestionClick('Tell me the missing skills which needed to be added in my resume to match the job description')}>
                   missing skills
                </button>
                <button onClick={() => handleQuestionClick('how well the resume matching with jd give in percentage')}>
                    Percentage
                </button>
            </div>
            {answer && (
                <div>
                    <label>{question}</label>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Product;
