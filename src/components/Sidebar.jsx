import React from "react";
import { FaCloudUploadAlt, FaBars, FaTimes, FaPalette } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-[46rem] w-[5em] p-3 space-y-5 bg-gray-400 hidden md:block">

        <button>
          <FaTimes size={32} className="hover:text-gray-700"/>
          <p>Close</p>
        </button>
      <button>
        <FaCloudUploadAlt size={48} className="hover:text-gray-700"/>
        <p>Logo</p>
      </button>

      <button>
        <FaPalette size={32} className="hover:text-gray-700"/>
        <p>Color</p>
      </button>
    </div>
  );
}
