import "./questionContainer.css";
import EastIcon from "@mui/icons-material/East";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QuestionContainer = ({
  question,
  answers,
  linkToBack,
  linkToNext,
  onAnswerSelected,
  selectedAnswer,
  questionIndex,
  questionsCount,
  givenAnswersCount,
}) => {
  const handleAnswerClick = (answer) => {
    onAnswerSelected(answer);
  };

  const handleNextClick = () => {
    if (!selectedAnswer) {
      toast.warn("Please, choose answer!");
    }

    if (
      questionIndex === questionsCount - 1 &&
      givenAnswersCount !== questionsCount
    ) {
      toast.warn("Please, choose answers for every question!");
    }
  };

  return (
    <div className="question">
      <div className="question-container">
        <div className="question-container__question">
          <div className="question-container__header">
            <h1>{question}</h1>
            <div className="question-container__progress">
              <CircularProgressbar
                value={questionIndex + 1}
                maxValue={questionsCount}
                text={questionIndex + 1 + "/" + questionsCount}
              />
            </div>
          </div>
          <div className="question-container__answers">
            {answers.map((answer, i) => (
              <div
                className={
                  selectedAnswer === answer
                    ? "question-container__answer-selected"
                    : "question-container__answer"
                }
                key={answer + i}
                onClick={() => handleAnswerClick(answer)}
              >
                {String.fromCharCode(97 + i)}. {answer}
              </div>
            ))}
          </div>

          <div className="question-container__navigation">
            <Link to={linkToBack}>
              <p className="question-container__back">Back</p>
            </Link>
            <Link to={linkToNext}>
              <button
                className="question-container__next-button"
                onClick={handleNextClick}
              >
                Next question <EastIcon className="arrow-icon" />
              </button>
              <ToastContainer autoClose={3000} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionContainer;
