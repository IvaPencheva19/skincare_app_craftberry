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

  const dots = Array.from({ length: Math.ceil(products.length / 2) }).map(
    (_, index) => (
      <div
        className={`slider__dot ${currentIndex === index * 2 ? "active" : ""}`}
        key={index}
        onClick={() => goToSlide(index * 2)}
      >
        ●
      </div>
    )
  );

  return (
    <div className="slider">
      <div>
        <div onClick={prevSlide} className="slider__left-arrow">
          {"<"}
        </div>
        <div onClick={nextSlide} className="slider__right-arrow">
          {">"}
        </div>
      </div>
      <div className="slider__slide">
        <div className="slider__product-cards">
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
      <div className="slider__dots-container">{dots}</div>
    </div>
  );
};

export default ImageSlider;
