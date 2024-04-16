import React, { useState } from 'react';
import axios from 'axios';

export default function Product() {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [response, setResponse] = useState('');

  const questions = [
    "What relevant experience do you have?",
    "Why are you interested in this position?",
    "What are your key strengths?"
  ];

  const handleQuestionClick = async (index) => {
    setSelectedQuestion(index);

    // Create FormData object to send resume file
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resume);
    formData.append('question_index', index);

    try {
      // Send data to Flask backend
      const result = await axios.post('/process', formData, {
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
    <div>
      <h1>ATS Project</h1>
      <div>
        <label>Job Description:</label>
        <input type="text" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
      </div>
      <div>
        <label>Resume:</label>
        <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
      </div>
      <div>
        <label>Select a Question:</label>
        {questions.map((question, index) => (
          <button key={index} type="button" onClick={() => handleQuestionClick(index)}>
            {question}
          </button>
        ))}
      </div>
      {response && <p>{response}</p>}
    </div>
  );
}

