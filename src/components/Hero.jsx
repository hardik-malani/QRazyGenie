import React from "react";
import Qr from "./Qr";
import { FaGreaterThan } from "react-icons/fa";

export default function Hero() {

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 h-screen w-full flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-row bg-white rounded-lg px-2">
            <input
              type="text"
              name="search"
              id=""
              className="focus:border-none focus:outline-none"
              placeholder="Enter your text/link here"
            />
            <button className="my-1 bg-blue-500 rounded-md px-2 w-8 h-8 hover:bg-blue-400">
              <FaGreaterThan />
            </button>
          </div>
        <Qr></Qr>
      </div>
    </>
  );
}
