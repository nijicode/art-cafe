import React from "react";

const Mojito = ({ id, name, img, lPrice, mPrice }) => {
  return (
    <div
      id={id}
      className="bg-white duration-500 hover:scale-105 relative p-5 rounded-lg w-full h-full text-black shadow-lg shadow-gray-700"
    >
      <img
        src={img}
        alt=""
        className="h-[220px] mb-2 w-full object-cover border-2 object-center rounded-lg"
      />
      <h2 className="font-bold text-center uppercase">{name}</h2>
      <div className="flex justify-around items-center">
        <table className="">
          <tr>
            <td>Medium</td>
            <td>|</td>
            <td>Large</td>
          </tr>
          <tr>
            <td>${mPrice}</td>
            <td></td>
            <td>${lPrice}</td>
          </tr>
        </table>
        <a
          href="#"
          className="text-3xl text-black hover:text-zinc-700 hover:scale-125 duration-500"
        >
          <ion-icon name="heart"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Mojito;