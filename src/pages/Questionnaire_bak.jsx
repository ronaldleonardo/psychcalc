import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ymrsQuestions } from "../data/ymrsQuestions";
import { madrsQuestions } from "../data/madrsQuestions";
import { rbdQuestions } from "../data/rbdQuestions";
import { getCurrentTime } from "../utils"; // Import the utility function
import * as XLSX from "xlsx";
import ConfirmationModal from "../components/ConfirmationModal"; // Import the modal component
// import downloading from "../assets/downloading.png"; // Import the image
// import home from "../assets/home.png"; // Import the image
// import reset from "../assets/reset.png"; // Import the image

const questionnaires = {
  ymrs: ymrsQuestions,
  madrs: madrsQuestions,
  rbd: rbdQuestions,
  // Add more questionnaires here
};

const Questionnaire = () => {
  const { id } = useParams(); // Get the questionnaire ID from the URL
  const { questions, severityLevels, icon, colorScheme } = questionnaires[id];

  const [answers, setAnswers] = useState({});
  const [descriptions, setDescriptions] = useState({});
  const [isExporting, setIsExporting] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showHomeModal, setShowHomeModal] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  if (!questions) {
    return <div>Questionnaire not found.</div>;
  }

  const styles = {
    primaryColor: { color: colorScheme.primary },
    secondaryBackground: { backgroundColor: colorScheme.secondary },
  };

  const handleAnswer = (questionId, score, description) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: score,
    }));
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [questionId]: description,
    }));
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((total, score) => total + score, 0);
  };

  const getSeverityLevel = (totalScore) => {
    const level = severityLevels.find(
      (range) => totalScore >= range.minScore && totalScore <= range.maxScore,
    );
    return level ? level.level : "Unknown severity";
  };

  const totalScore = calculateTotalScore();
  const severityLevel = getSeverityLevel(totalScore);

  // Calculate progress
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = ((answeredQuestions / totalQuestions) * 100).toFixed(0);

  // Function to go back to the main app
  const goBackToMainApp = () => {
    navigate("/"); // Navigate to the home page
  };

  // Function to export results as Excel
  const exportResults = () => {
    setIsExporting(true); // Start loading

    setTimeout(() => {
      // Simulate a delay for the export process
      const { date, hour, minutes, seconds } = getCurrentTime();
      const currentDate = date;
      const currentTime = `${hour}${minutes}${seconds}`;

      // Prepare data for the Excel sheet
      const data = questions.map((q) => ({
        Question: q.question,
        SelectedOption: descriptions[q.id] || "Not answered",
        Score: answers[q.id] || 0,
      }));

      // Add total score and severity level to the data
      data.push({
        Question: "Total Score",
        SelectedOption: "",
        Score: totalScore,
      });
      data.push({
        Question: "Severity Level",
        SelectedOption: severityLevel,
        Score: "",
      });
      data.push({
        Question: "Date Created",
        SelectedOption: currentDate,
        Score: `${hour}:${minutes}:${seconds}`,
      });

      // Create a worksheet
      const worksheet = XLSX.utils.json_to_sheet(data);

      // Create a workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

      // Export the workbook as an Excel file
      XLSX.writeFile(
        workbook,
        `${id}_Results_${currentDate}_${currentTime}.xlsx`,
      );

      setIsExporting(false); // Stop loading
      setShowExportModal(false); // Close the modal
    }, 1000); // Simulate a 1-second delay
  };

  // Function to reset the questionnaire
  const resetQuestionnaire = () => {
    setAnswers({});
    setDescriptions({});
    setShowResetModal(false); // Close the modal
  };

  return (
    <div className="App">
      <h1>
        {icon} {id.toUpperCase()} Questionnaire
      </h1>

      {/* Questions */}
      {questions.map((q) => (
        <div className="questions" key={q.id}>
          <h3>
            {q.id}. {q.question}
          </h3>
          {/* Display the question description if it exists */}
          {q.description && (
            <div className="question-description">{q.description}</div>
          )}
          {/* Render the options */}
          {q.options.map((option) => (
            <label
              key={option.score}
              style={{
                backgroundColor:
                  answers[q.id] === option.score
                    ? colorScheme.primary
                    : "transparent",
              }}
              className={`option-label ${
                answers[q.id] === option.score ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option.score}
                onChange={() => handleAnswer(q.id, option.score, option.text)}
                className="radio-input"
              />
              <div className="labelandscore">
                <div className="labelandscore left">{option.text}</div>
                <div className="labelandscore right">
                  <span className="scoreSpan">+{option.score}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      ))}

      {/* Total Score and Severity Level */}
      {progress >= 100 ? (
        <>
          <h2>Total Score: {totalScore}</h2>
          <div className="severityLevel">
            <h2>Severity Level: {severityLevel}</h2>
          </div>
        </>
      ) : (
        <h2>Please fill out all questions</h2>
      )}

      {/* Sticky Progress Bar */}
      <div className="sticky-progress-bar">
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress}%`,
                backgroundColor: colorScheme.primary, // Use the primary color for the progress bar
              }}
            ></div>
          </div>
          <div className="progress-text">
            {progress}% completed ({answeredQuestions}/{totalQuestions}{" "}
            questions answered)
            {progress >= 100 ? " 🎉" : ""} {/* Add the emoji conditionally */}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="exportButtons">
        {/* Go Back Button */}
        <button
          onClick={() => setShowHomeModal(true)}
          className="action-button"
        >
          🏠
        </button>

        {/* Export Button */}
        <button
          onClick={() => setShowExportModal(true)}
          className="action-button"
          disabled={isExporting}
        >
          {isExporting ? "⏳" : "📥"}
        </button>
        {/* Print Button */}
        <button
          onClick={() => setShowPrintModal(true)}
          className="action-button"
        >
          🖨️
        </button>
        {/* Reset Button */}
        <button
          onClick={() => setShowResetModal(true)}
          className="action-button"
        >
          🔄
        </button>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={showHomeModal}
        onClose={() => setShowHomeModal(false)}
        onConfirm={goBackToMainApp}
        message="Are you sure you want to go back to HomePage?"
      />

      <ConfirmationModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onConfirm={exportResults}
        message="Are you sure you want to export the results as an Excel file?"
      />
      <ConfirmationModal
        isOpen={showPrintModal}
        onClose={() => setShowPrintModal(false)}
        onConfirm={() => {
          setShowPrintModal(false); // Close the modal
          setTimeout(() => {
            window.print(); // Trigger print after the modal is closed
          }, 200); // Small delay to ensure the modal is removed from the DOM
        }}
        message="Are you sure you want to print the results?"
      />
      <ConfirmationModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={resetQuestionnaire}
        message="Are you sure you want to reset the questionnaire?"
      />
    </div>
  );
};

export default Questionnaire;
