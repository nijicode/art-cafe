import React from "react";
import mission from "../mission/mission.jpg";
import vision from "../mission/vision.jpg";
import values from "../mission/values.jpg";

const History = () => {
  return (
    <div className="bg-black w-full z-10 h-auto p-10 md:p-20 " id="service">
      <div className="flex w-full h-auto flex-col gap-12">
        <div className="flex gap-8 md:flex-row flex-col">
          <div className="w-full md:w-[300px] lg:w-[500px] h-[350px] rounded-lg shadow-md shadow-gray-600">
            <img
              src={mission}
              alt=""
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
          <div className="text-white flex-1 flex flex-col justify-center">
            <h1 className="font-bold text-xl mb-4">Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              unde nulla facilis vero, asperiores expedita culpa eum, velit
              optio voluptate recusandae rem suscipit animi a soluta maxime. Sit
              beatae velit rem minima.
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:flex-row-reverse flex-col">
          <div className="w-full md:w-[300px] lg:w-[500px] h-[350px] rounded-lg shadow-md shadow-gray-600">
            <img
              src={vision}
              alt=""
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
          <div className="text-white flex-1 flex flex-col justify-center">
            <h1 className="font-bold text-xl mb-4">Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              unde nulla facilis vero, asperiores expedita culpa eum, velit
              optio voluptate recusandae rem suscipit animi a soluta maxime. Sit
              beatae velit rem minima.
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:flex-row flex-col mb-32">
          <div className="w-full md:w-[300px] lg:w-[500px] h-[350px] rounded-lg shadow-md shadow-gray-600">
            <img
              src={values}
              alt=""
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
          <div className="text-white flex-1 flex flex-col justify-center">
            <h1 className="font-bold text-xl mb-4">Our Values</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              unde nulla facilis vero, asperiores expedita culpa eum, velit
              optio voluptate recusandae rem suscipit animi a soluta maxime. Sit
              beatae velit rem minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
