import "./productCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
const ProductCard = ({ imgSrc, title, price }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const existingArrayFavourites = JSON.parse(
      localStorage.getItem("favourites")
    );
    if (existingArrayFavourites.includes(title)) {
      setIsFavourite(true);
    }
  }, []);

  const addToFavourites = () => {
    setIsFavourite((prev) => !prev);

    const existingArrayFavourites = JSON.parse(
      localStorage.getItem("favourites")
    );

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
    console.log(existingArrayFavourites);
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
