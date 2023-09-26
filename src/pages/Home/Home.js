import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-background">
        <img src="/home_image.png"></img>
      </div>
      <div className="home-content">
        <h1>Build a self care routine suitable for you </h1>
        <p>
          Take out test to get a personalised self care routine based on your
          needs.
        </p>

        <button
          className="home-content__start-button"
          onClick={() => {
            navigate("/quiz/0");
          }}
        >
          Start the quiz
        </button>
      </div>
    </div>
  );
};
export default Home;
