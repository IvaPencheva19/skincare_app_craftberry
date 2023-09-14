import React, { createContext, useContext, useState } from "react";

// Create a context
export const AnswersContext = createContext();

// Create a provider for the context
export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState({}); // Initial empty array

  // Function to update answers
  const updateAnswers = (newAnswers) => {
    setAnswers(newAnswers);
  };

  return (
    <AnswersContext.Provider value={{ answers, updateAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};
