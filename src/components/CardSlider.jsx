import React, { useEffect, useState } from "react";
import cold1 from "../bg-img/cold1.jpg";
import cold2 from "../bg-img/cold2.jpg";
import cold3 from "../bg-img/cold3.jpg";
import cold4 from "../bg-img/cold4.jpg";
import cold5 from "../bg-img/cold5.jpg";

const CardSlider = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const slides = [cold1, cold2, cold3, cold4, cold5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const intervalId = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="w-full h-full relative group">
      <div
        className="absolute w-full h-full bg-center bg-cover duration-500 rounded-3xl"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
      <div className=" absolute text-black hidden group-hover:block top-[45%] hover:opacity-80 text-5xl duration-500 cursor-pointer">
        <ion-icon name="chevron-back-circle" onClick={prevSlide}></ion-icon>
      </div>
      <div className=" absolute text-black hidden group-hover:block top-[45%] hover:opacity-80 right-0 text-5xl duration-500 cursor-pointer">
        <ion-icon name="chevron-forward-circle" onClick={nextSlide}></ion-icon>
      </div>
      <div className="absolute bottom-5 flex w-full justify-center items-center">
        {slides.map((slide, slideIndex) => (
          <div
            className={`px-1 text-black duration-500 cursor-pointer ${
              currentIndex === slideIndex ? "text-3xl" : "opacity-80 text-xl"
            }`}
          >
            <ion-icon
              key={slideIndex}
              name="ellipse"
              onClick={() => goToSlide(slideIndex)}
            ></ion-icon>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
