import React from "react";
import Qr from "./Qr";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 h-screen w-full flex flex-col justify-center items-center space-y-10">
        <input
          type="text"
          name="search"
          id=""
          className="bg-white w-min-56 rounded-lg px-2 p-1"
          placeholder="Enter your text/link here"
        />
        <Qr></Qr>
        <button className="w-auto p-2 bg-yellow-600 hover:bg-yellow-500 cursor-pointer rounded-xl font-mono hover:text-white">
          Download
        </button>
      </div>
    </>
  );
}
