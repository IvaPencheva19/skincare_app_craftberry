import { useState } from "react";
import ProductCard from "../ProductCard.js/ProductCard";
import "./imageSlider.css";

const ImageSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 2;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 2;
      return newIndex < 0
        ? products.length - (products.length % 2 || 2)
        : newIndex;
    });
  };
  return (
    <div className="sliderStyles">
      <div>
        <div onClick={prevSlide} className="leftArrowStyles">
          {"<"}
        </div>
        <div onClick={nextSlide} className="rightArrowStyles">
          {">"}
        </div>
      </div>
      <div className="slideStyles">
        <div className="product-cards">
          {products
            // .slice(currentIndex, currentIndex + 2)
            .map((product, index) => {
              return (
                <div
                  className={
                    index === currentIndex || index === currentIndex + 1
                      ? "slide active"
                      : "slide"
                  }
                  key={index}
                >
                  {product.title === products[currentIndex].title ||
                  product.title === products[currentIndex + 1]?.title ? (
                    <ProductCard
                      key={index}
                      imgSrc={product.imgSrc}
                      title={product.title}
                      price={product.price}
                    />
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
      <div className="dotsContainerStyles">
        {Array.from({ length: Math.ceil(products.length / 2) }).map(
          (_, index) => (
            <div
              className={`dotStyle ${
                currentIndex === index * 2 ? "active" : ""
              }`}
              key={index}
              onClick={() => goToSlide(index * 2)}
            >
              ●
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
