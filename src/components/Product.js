import React, {useState} from 'react';
import styles from '../styles/Product.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';

export default function Product() {

  const [activeTab, setActiveTab] = useState('option1');
  const [feedbackOption, setFeedbackOption] = useState('');
  const initialValues = {
    jobDescription: '',
    resume: null,
  };

  const validationSchema = Yup.object().shape({
    jobDescription: Yup.string().required('Job description is required'),
    resume: Yup.mixed().required('Resume is required').test(
      'fileFormat',
      'Only PDF files are allowed',
      (value) => value && value.type === 'application/pdf'
    ),
  });

  
  const handleFeedbackOptionChange = (option) => {
    setFeedbackOption(option);
    // Implement logic here based on the selected option
    // For example, call an API to analyze the resume and provide feedback
  };

  const handleSubmit = (values) => {
    // Submit the form data to the server or handle it locally
    console.log('Submitted values:', values);
  };


  return (
    <div className={styles.productWrapper}>
        <div className={styles.productMain}>    
            <div className={styles.productLeft}>
                <div className={styles.LeftTabMenu}>
                    <button onClick={() => setActiveTab('option1')} className={activeTab === 'option1' ? styles.active : ''}>1. Add Resume</button>
                    <button onClick={() => setActiveTab('option2')} className={activeTab === 'option2' ? styles.active : ''}>2. Save Resume</button>
                    <button onClick={() => setActiveTab('option3')} className={activeTab === 'option3' ? styles.active : ''}>3. Create Resume</button>
                </div>
                <div className={styles.LeftTabContent}>
                    {activeTab === 'option1' && (
                        <div>
                            <div></div>
                            <div>
                            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="jobDescription">Job Description:</label>
              <Field
                as="textarea"
                id="jobDescription"
                name="jobDescription"
                rows={4}
                cols={50}
              />
              <ErrorMessage name="jobDescription" component="div" className="error" />
            </div>
            <div>
              <label>Upload Resume (PDF only):</label>
              <Dropzone setFieldValue={setFieldValue} />
              <ErrorMessage name="resume" component="div" className="error" />
            </div>
            <div>
              <h3>Select Feedback Option:</h3>
              <button onClick={() => handleFeedbackOptionChange('Improve')}>Improve Resume</button>
              <button onClick={() => handleFeedbackOptionChange('Review')}>Review Resume</button>
              <button onClick={() => handleFeedbackOptionChange('Score')}>Score Resume</button>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
                            </div>
                            <div></div>
                        </div>
                    )}

                    {activeTab === 'option2' && (
                        <div>Save Resume</div>
                    )}

                    {activeTab === 'option3' && (
                        <div>Create Resume</div>
                    )}
                </div>
            </div>
            <div className={styles.productRight}></div>
        </div>  
    </div>
  )
};

const Dropzone = ({ setFieldValue }) => {
    const onDrop = (acceptedFiles) => {
      setFieldValue('resume', acceptedFiles[0]);
    };
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop PDF files here, or click to select files</p>
      </div>
    );
  };
  
