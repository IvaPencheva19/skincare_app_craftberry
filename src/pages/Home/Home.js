import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
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

        <Link to="/quiz/0">
          <button className="home-content__start-button">Start the quiz</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
