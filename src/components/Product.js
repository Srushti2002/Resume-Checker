import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Product.module.css";
import Upload from "../svgFiles/upload.js";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Product() {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [response, setResponse] = useState("");

  const [currentView, setCurrentView] = useState("percentage");

  const handleTellMeAboutResumeClick = async () => {
    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume", resume);

    try {
      const result = await axios.post(
        "http://localhost:8000/tell_me_about_resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Set response and view only after successful API call
      setResponse(result.data.response);
      setCurrentView("review");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePercentageMatchClick = async () => {
    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume", resume);

    try {
      const result = await axios.post(
        "http://localhost:8000/percentage_match",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Set response and view only after successful API call
      setResponse(result.data.response);
      setCurrentView("percentage");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Move parseResponse inside a useMemo hook to avoid unnecessary processing
  const parsedResponse = React.useMemo(() => {
    if (!response) return null;

    try {
      if (currentView === "percentage") {
        const percentageMatch = response.match(/\*\*(.*?)%/)?.[1];
        const keywordsList = response
          .split("**Keywords Missing:**")[1]
          .split("**Final Thoughts:**")[0]
          .split("*")
          .filter((item) => item.trim());
        const finalThoughts = response.split("**Final Thoughts:**")[1].trim();

        return {
          percentage: percentageMatch,
          keywords: keywordsList,
          thoughts: finalThoughts,
        };
      } else {
        const sections = response.split("\n\n");
        const jobTitle = sections[1]?.replace("**Job Title:** ", "").trim();
        const reviewIntro = sections[2]
          ?.replace("**Resume Review:** ", "")
          .trim();

        const strengthsStart = response.indexOf("**Strengths:**");
        const strengthsEnd = response.indexOf("**Weaknesses:**");
        const strengthsList = response
          .slice(strengthsStart, strengthsEnd)
          .split("*")
          .filter((item) => item.trim() && !item.includes("Strengths:"))
          .map((item) => item.trim());

        const weaknessesStart = response.indexOf("**Weaknesses:**");
        const weaknessesEnd = response.indexOf("**Overall Assessment:**");
        const weaknessesList = response
          .slice(weaknessesStart, weaknessesEnd)
          .split("*")
          .filter((item) => item.trim() && !item.includes("Weaknesses:"))
          .map((item) => item.trim());

        const overallAssessment = response
          .slice(response.indexOf("**Overall Assessment:**"))
          .replace("**Overall Assessment:**", "")
          .trim();

        return {
          jobTitle,
          reviewIntro,
          strengths: strengthsList,
          weaknesses: weaknessesList,
          assessment: overallAssessment,
        };
      }
    } catch (error) {
      console.error("Error parsing response:", error);
      return null;
    }
  }, [response, currentView]);

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productMain}>
        <div className={styles.productSecFirst} data-aos="fade-left">
          <div className={styles.productFirstHead}>Add Your Resume</div>
          <div className={styles.productFirstContent}>
            Paste Your JD and upload your resume to get started.
          </div>
        </div>
        <div className={styles.productSecSecond} data-aos="fade-right">
          <label className={styles.productSecondHead}>Job Description</label>
          <textarea
            className={styles.productSecondContent}
            value={jobDescription}
            rows={9}
            placeholder="Paste Your Job Description"
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div className={styles.productSecThird} data-aos="fade-right">
          <label className={styles.productThirdHead}>
            Upload Your Resume (PDF Format)
          </label>
          <div className={styles.productThirdContent}>
            <input
              className={styles.productThirdInput}
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
            />
            <div className={styles.dragDrop}>
              <Upload className={styles.dragDropSign} />
              <div className={styles.dragDropText}>
                {resume ? (
                  <div className={styles.dragDropUploaded}>Resume uploaded</div>
                ) : (
                  <div className={styles.dragDropTextTop}>
                    Drag and drop the file here
                  </div>
                )}
                <div className={styles.dragDropTextBottom}>
                  Limit 20 MB per file : PDF
                </div>
              </div>

              <button className={styles.dragDropButton}>Browse Files</button>
            </div>
          </div>
        </div>
        <div className={styles.productSecFourth} data-aos="fade-up">
          <button
            className={styles.productFourthButton}
            onClick={handleTellMeAboutResumeClick}
          >
            Tell Me About Resume
          </button>
          <button
            className={styles.productFourthButton}
            onClick={handlePercentageMatchClick}
          >
            Percentage Match
          </button>
        </div>

        <div className={styles.productSecFifth}>
          {response && parsedResponse && (
            <div className={styles.responseContainer}>
              {currentView === "percentage" ? (
                <>
                  <div className={styles.matchPercentage}>
                    <h2>Match Score</h2>
                    <div className={styles.percentageCircle}>
                      {parsedResponse.percentage}%
                    </div>
                  </div>

                  <div className={styles.keywordsMissing}>
                    <h2>Missing Keywords</h2>
                    <ul>
                      {parsedResponse.keywords.map((keyword, index) => (
                        <li key={index}>{keyword.trim()}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.finalThoughts}>
                    <h2>Analysis</h2>
                    <p>{parsedResponse.thoughts}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.resumeReview}>
                    <h2 className={styles.jobTitle}>
                      {parsedResponse.jobTitle}
                    </h2>
                    <p className={styles.reviewIntro}>
                      {parsedResponse.reviewIntro}
                    </p>
                  </div>

                  <div className={styles.strengthsSection}>
                    <h2>Strengths</h2>
                    <ul>
                      {parsedResponse.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.weaknessesSection}>
                    <h2>Areas for Improvement</h2>
                    <ul>
                      {parsedResponse.weaknesses.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.assessmentSection}>
                    <h2>Overall Assessment</h2>
                    <p>{parsedResponse.assessment}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
