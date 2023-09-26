import React, { useState } from "react";
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer";
import { useParams } from "react-router-dom";

const Quiz = ({ questions }) => {
  let { questionIndex } = useParams();

  const [answers, setAnswers] = useState({});

  const handleAnswerSelection = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  const next = parseInt(questionIndex) + 1;
  let linkToNext = `/quiz/${questionIndex}`;

  if (!answers[questionIndex]) {
    linkToNext = `/quiz/${questionIndex}`;
  } else if (questionIndex < questions.length - 1) linkToNext = `/quiz/${next}`;
  else {
    linkToNext = `/quiz/results`;
  }
  return (
    <div>
      <QuestionContainer
        question={questions[questionIndex].question}
        answers={questions[questionIndex].answers}
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
