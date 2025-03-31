// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import QuestionnairePANSS from "./pages/QuestionnairePANSS";

import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Questionnaire />} />
        <Route path="/panss" element={<QuestionnairePANSS />} />
      </Routes>
    </Router>
  );
};

export default App;
