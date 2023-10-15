import React from "react";
import { FaCloudUploadAlt, FaBars, FaTimes, FaPalette, FaDownload } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function Sidebar() {

  const dispatch = useDispatch()

  return (
    <div className="h-[auto] w-[5em] p-3 space-y-5 bg-gray-400 hidden md:block rounded-e-xl">

        <button>
          <FaTimes size={32} className="hover:text-gray-700"/>
          <p>Close</p>
        </button>
      <button>
        <FaCloudUploadAlt size={32} className="hover:text-gray-700"/>
        {/* <p>Logo</p> */}
      </button>

      <button>
        <FaPalette size={32} className="hover:text-gray-700"/>
        {/* <p>Color</p> */}
      </button>
      <button>
        <FaDownload size={32} className="hover:text-gray-700"/>
        {/* <p className="-ml-3">Download</p> */}
      </button>
    </div>
  );
}
