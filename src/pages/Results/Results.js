// import "./home.css";
import { Link } from "react-router-dom";
import "./results.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { AnswersContext } from "../../context/AnswersContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const url = "https://jeval.com.au/collections/hair-care/products.json";

function isObjectEqual(obj1, obj2) {
  return obj1.title === obj2.title;
}

const Results = () => {
  const { answers, updateAnswers } = useContext(AnswersContext);
  const [products, setProducts] = useState([]);
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  console.log(answers);
  useEffect(() => {
    const storedAnswers = localStorage.getItem("answers");
    if (storedAnswers) {
      const parsedAnswers = JSON.parse(storedAnswers);
      updateAnswers(parsedAnswers);
    }
    const existingArrayFavourites = JSON.parse(
      localStorage.getItem("favourites")
    );
    setFavourites(existingArrayFavourites);
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    let price = "";
    let matchArr = [];
    for (let productObj of products) {
      let found = false;
      const newProduct = {
        imgSrc: productObj.images[0].src,
        title: productObj.title,
        price: price,
      };

      for (let answer of Object.values(answers)) {
        if (
          productObj.title.toLowerCase().includes(answer.toLowerCase()) ||
          productObj.body_html.toLowerCase().includes(answer.toLowerCase())
        ) {
          found = true;
        } else {
          for (let tag of productObj.tags) {
            if (tag.toLowerCase().includes("price")) {
              price = tag.slice(tag.indexOf("$"));
            }
            if (tag.toLowerCase().includes(answer.toLowerCase())) {
              found = true;
            }
          }
        }
      }
      if (found && favourites.includes(productObj.title)) {
        matchArr.unshift(newProduct);
      } else if (found && !favourites.includes(productObj.title)) {
        matchArr.push(newProduct);
      }
    }

    matchArr = matchArr.filter((obj, index, self) => {
      return (
        self.findIndex((otherObj) => isObjectEqual(obj, otherObj)) === index
      );
    });
    setMatchingProducts(matchArr);
  }, [products, favourites]);

  return (
    <div className="results">
      <div className="results-background">
        <img src="/results_image.png"></img>
      </div>
      <div className="results-content">
        <h1>Build you everyday self care routine. </h1>
        <p>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </p>

        <Link to="/quiz/0">
          <button className="results-content__retake-button">
            Retake the quiz
          </button>
        </Link>
        <div className="results-content__recommendations">
          <div className="results-content__recommendations-info">
            <h3>Daily routine</h3>
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </div>
          <div className="results-content__recommendations-slider">
            <ImageSlider products={matchingProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Results;
