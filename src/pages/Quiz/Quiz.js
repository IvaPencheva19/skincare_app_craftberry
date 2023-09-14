import React, { useEffect, useState } from "react";
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer";
import { useParams } from "react-router-dom";
import { AnswersContext } from "../../context/AnswersContext";
import { useContext } from "react";
const Quiz = () => {
  const { answers, updateAnswers } = useContext(AnswersContext);

  const questions = [
    {
      question: "What's your hair type or texture?",
      answers: ["Straight", "Curly", "Wavy", "Fine"],
    },
    {
      question: "How often do you wash your hair?",
      answers: [
        "Daily",
        "Every other day",
        "Twice a week",
        "Once a week",
        "Once every two weeks",
      ],
    },
    {
      question: "What benefit do you look for in your hair products?",
      answers: [
        "Anti-breakage",
        "Hydration",
        "Soothing dry scalp",
        "Repairs the appearance of damaged hair",
        "Volume",
        "Curl and coil enhancing",
      ],
    },
    {
      question: "Is there anything troubling you about your hair?",
      answers: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"],
    },
    {
      question: "What is your natural hair color(s) today?",
      answers: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"],
    },
    // Add more questions here
  ];

  const handleAnswerSelection = (questionIndex, answer) => {
    updateAnswers({ ...answers, [questionIndex]: answer });
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  let { questionIndex } = useParams();
  const back = parseInt(questionIndex) - 1;
  const linkToBack = questionIndex > 0 ? `/quiz/${back}` : "/";
  const next = parseInt(questionIndex) + 1;
  let linkToNext = `/quiz/${questionIndex}`;
  if (!answers[questionIndex]) {
    linkToNext = `/quiz/${questionIndex}`;
  } else if (questionIndex < questions.length - 1) linkToNext = `/quiz/${next}`;
  else {
    console.log("here");
    linkToNext = `/quiz/results`;
  }
  return (
    <div>
      <QuestionContainer
        question={questions[questionIndex].question}
        answers={questions[questionIndex].answers}
        linkToBack={linkToBack}
        linkToNext={linkToNext}
        onAnswerSelected={(answer) =>
          handleAnswerSelection(questionIndex, answer)
        }
        selectedAnswer={answers[questionIndex]}
        questionIndex={parseInt(questionIndex)}
        questionsCount={questions.length}
        givenAnswersCount={Object.keys(answers).length}
      />
    </div>
  );
};

export default Quiz;
