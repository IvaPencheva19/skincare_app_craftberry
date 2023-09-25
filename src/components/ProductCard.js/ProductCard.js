import "./productCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { useApi } from "../../context/APIContext";

const ProductCard = ({ imgSrc, title, price }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, updateFavourites } = useApi();

  useEffect(() => {
    if (favourites.includes(title)) {
      setIsFavourite(true);
    }
  }, [favourites]);

  const addToFavourites = () => {
    setIsFavourite((prev) => !prev);

    const existingArrayFavourites = favourites;

    if (!isFavourite) {
      existingArrayFavourites.push(title);
      updateFavourites(existingArrayFavourites);
    } else {
      const indexToRemove = existingArrayFavourites.indexOf(title);
      if (indexToRemove !== -1) {
        existingArrayFavourites.splice(indexToRemove, 1);
        updateFavourites(existingArrayFavourites);
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
