import React from "react";
import CardSlider from "./CardSlider";
import { Link } from "react-scroll";

const SpecialOffers = () => {
  return (
    <div
      className="w-full md:h-[95vh] h-[1000px] bg-black text-white p-10 md:p-20 grid gap-10 grid-rows-2 md:grid-rows-1 md:grid-cols-2 "
      id="offers"
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center">
          <h1 className="text-3xl mb-5 md:text-5xl leading-tight md:mb-10 font-bold md:max-w-[21ch]">
            Cool Down with Art-Café's Cold Coffee Specials!
          </h1>
          <span className="text-sm md:text-lg">
            Buy One Iced Latte, Get One 50% Off, Enjoy 20% off any Cold Brew
            Coffee
          </span>
          <div className="w-full flex justify-center mt-10">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="bg-white duration-500 text-sm md:text-md cursor-pointer border-4 border-white hover:bg-gray-500 hover:text-white text-black font-bold block py-2 px-5 rounded-full "
            >
              ORDER NOW!
            </Link>
          </div>
        </div>
      </div>
      <CardSlider autoSlide={true} />
    </div>
  );
};

export default SpecialOffers;
