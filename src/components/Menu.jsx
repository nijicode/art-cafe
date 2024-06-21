import React from "react";
import { coldList, hotList, mojitoList } from "../asset/asset";
import Colds from "./Colds";
import Hot from "./Hot";
import Mojito from "./Mojito";

const Menu = () => {
  return (
    <div
      className="w-full h-auto bg-black text-white flex flex-col p-10 pb-32 items-center"
      id="menu"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-3xl border-t-4 border-b-4 w-full text-center">
          Cold Coffee 🧊
        </h1>
        <div className="grid grid-cols-menu w-full gap-10 mt-8 md:p-12">
          {coldList.map((item, index) => {
            return (
              <Colds
                key={index}
                id={item.id}
                name={item.name}
                img={item.img}
                mPrice={item.mPrice}
                lPrice={item.lPrice}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-32 border-t-4 border-b-4 w-full text-center">
          Hot Coffee ♨️
        </h1>
        <div className="grid grid-cols-menu w-full gap-10 mt-8 md:p-12 ">
          {hotList.map((item, index) => {
            return (
              <Hot
                key={index}
                id={item.id}
                name={item.name}
                img={item.img}
                lPrice={item.lPrice}
                mPrice={item.mPrice}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-32 border-t-4 border-b-4 w-full text-center">
          Mojito 🍸
        </h1>
        <div className="grid grid-cols-menu w-full gap-10 mt-8 md:p-12 ">
          {mojitoList.map((item, index) => {
            return (
              <Mojito
                key={index}
                id={item.id}
                name={item.name}
                img={item.img}
                lPrice={item.lPrice}
                mPrice={item.mPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
