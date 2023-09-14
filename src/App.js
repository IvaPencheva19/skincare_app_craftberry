import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Quiz from "./pages/Quiz/Quiz";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:questionIndex" element={<Quiz />} />
        <Route path="/quiz/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
