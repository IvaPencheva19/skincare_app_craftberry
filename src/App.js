import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Quiz from "./pages/Quiz/Quiz";
import ApiProvider from "./context/APIContext";
import QuizWrapper from "./components/QuizWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz/:questionIndex",
      element: <QuizWrapper />,
    },
    {
      path: "/quiz/results",
      element: <Results />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return (
    <ApiProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ApiProvider>
  );
}

export default App;
