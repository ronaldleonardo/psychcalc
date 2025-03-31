// src/components/QuestionnaireCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const QuestionnaireCard = ({ title, description, path }) => {
  return (
    <div className="questionnaire-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={path} className="start-button">
        Start Questionnaire
      </Link>
    </div>
  );
};

export default QuestionnaireCard;
