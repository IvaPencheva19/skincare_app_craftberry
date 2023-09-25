import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const url = "https://jeval.com.au/collections/hair-care/products.json";

  useEffect(() => {
    console.log("hereeeee");
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const apiContextValue = {
    products,
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default ApiProvider;
