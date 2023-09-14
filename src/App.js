import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import { AnswersProvider } from "./context/AnswersContext";
import Quiz from "./pages/Quiz/Quiz";
function App() {
  return (
    <div className="App">
      <AnswersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:questionIndex" element={<Quiz />} />
          <Route path="/quiz/results" element={<Results />} />
        </Routes>
      </AnswersProvider>
    </div>
  );
}

export default App;
