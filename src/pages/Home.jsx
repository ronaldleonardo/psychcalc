// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import QuestionnaireCard from "../components/QuestionnaireCard";

const questionnaires = [
  {
    id: "ymrs",
    title: "Young Mania Rating Scale (YMRS)",
    description: "A questionnaire to assess the severity of mania.",
    path: "/ymrs",
  },
  {
    id: "madrs",
    title: "Montgomery-Asberg Depression Rating Scale (MADRS)",
    description: "A questionnaire to assess the severity of depression.",
    path: "/madrs",
  },
  {
    id: "panss",
    title: "Positive and Negative Syndrome Scale (PANSS)",
    description:
      "A questionnaire to assess the severity of psychotic symptoms.",
    path: "/panss",
  },
  {
    id: "rbd",
    title: "Instrument Penilaian Risiko Bunuh Diri (RBD)",
    description: "A questionnaire to assess the risk of suicide.",
    path: "/rbd",
  },
  {
    id: "ham-a",
    title: "Hamilton Anxiety Scale",
    description: "A questionnaire to assess the level of anxiety based on clinical questions.",
    path: "/ham-a",
  },

  // Add more questionnaires here
];
const Home = () => {
  return (
    <div className="home App">
      {/*Scroll to top*/}
      {window.scrollTo({ top: 0 })}
      <h1>Questionnaires</h1>
      <div className="questionnaire-list">
        {questionnaires.map((questionnaire) => (
          <QuestionnaireCard key={questionnaire.id} {...questionnaire} />
        ))}
      </div>
    </div>
  );
};

export default Home;
