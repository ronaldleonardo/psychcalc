// src/data/phq9Questions.js
export const phq9Questions = {
  icon: "😔",
  colorScheme: {
    primary: "#73b7b7", // Light Blue
    secondary: "##3b6a6a;", // Dark Blue
  },
  questions: [
    {
      id: 1,
      question: "Kesedihan yang Tampak",
      description:
        "Memperlihatkan rasa tidak ada harapan, murung, dan putus asa",
      options: [
        {
          score: 0,
          text: "Tidak tampak sedih",
        },
        { score: 2, text: "More than half the days" },
        {
          score: 3,
          text: "Nearly every day",
          description: "descriptions for score 3",
        },
      ],
    },
  ],
  severityLevels: [
    { minScore: 0, maxScore: 12, level: "Not likely or minimal severity" },
    { minScore: 13, maxScore: 20, level: "Minimal severity" },
    { minScore: 21, maxScore: 26, level: "Mild severity" },
    { minScore: 27, maxScore: 38, level: "Moderate illness" },
    { minScore: 39, maxScore: Infinity, level: "Very severe illness" },
  ],
};
