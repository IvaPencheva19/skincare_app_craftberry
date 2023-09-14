import "./productCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
const ProductCard = ({ imgSrc, title, price }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const existingArrayFavouritesJSON = localStorage.getItem("favourites");
    if (existingArrayFavouritesJSON) {
      const existingArrayFavourites = JSON.parse(existingArrayFavouritesJSON);
      if (existingArrayFavourites.includes(title)) {
        setIsFavourite(true);
      }
    }
  }, []);
  const addToFavourites = () => {
    setIsFavourite((prev) => !prev);
    const existingArrayFavouritesJSON = localStorage.getItem("favourites");
    const existingArrayFavourites = existingArrayFavouritesJSON
      ? JSON.parse(existingArrayFavouritesJSON)
      : [];

    if (!isFavourite) {
      existingArrayFavourites.push(title);
      localStorage.setItem(
        "favourites",
        JSON.stringify(existingArrayFavourites)
      );
    } else {
      const indexToRemove = existingArrayFavourites.indexOf(title);
      if (indexToRemove !== -1) {
        existingArrayFavourites.splice(indexToRemove, 1);
        localStorage.setItem(
          "favourites",
          JSON.stringify(existingArrayFavourites)
        );
      }
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__icon" onClick={addToFavourites}>
        {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      <div className="product-card__image">
        <img src={imgSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
