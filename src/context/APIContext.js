import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const url = "https://jeval.com.au/collections/hair-care/products.json";
  const [products, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
    const existingArrayFavourites = JSON.parse(
      localStorage.getItem("favourites")
    );
    if (!existingArrayFavourites) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
    setFavourites(existingArrayFavourites);
  }, []);

  const updateFavourites = (existingArrayFavourites) => {
    localStorage.setItem("favourites", JSON.stringify(existingArrayFavourites));
    setFavourites(existingArrayFavourites);
  };

  const apiContextValue = {
    products,
    favourites,
    updateFavourites,
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default ApiProvider;
