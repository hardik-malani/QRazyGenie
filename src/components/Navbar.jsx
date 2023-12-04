import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black w-full p-4 flex flex-row justify-between items-center">
      <span className="text-3xl Ninja bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
        qRazy-Genie
      </span>
      <div className="hidden md:block text-blue-500">
        <Link to="/">
          <span className="text-[18px] mr-10 hover:text-gray-300 my-1">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="text-[18px] mr-10 hover:text-gray-300 my-1">
            About
          </span>
        </Link>
      </div>
    </div>
  );
}
