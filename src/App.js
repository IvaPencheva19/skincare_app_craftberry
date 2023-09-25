import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Quiz from "./pages/Quiz/Quiz";
import ApiProvider from "./context/APIContext";
function App() {
  return (
    <ApiProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:questionIndex" element={<Quiz />} />
          <Route path="/quiz/results" element={<Results />} />
        </Routes>
      </div>
    </ApiProvider>
  );
}

export default App;
