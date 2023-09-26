import { useParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import { questions } from "../data/questions";
const QuizWrapper = () => {
  let { questionIndex } = useParams();
  return questionIndex > questions.length - 1 ? (
    <Home />
  ) : (
    <Quiz questions={questions} />
  );
};
export default QuizWrapper;
