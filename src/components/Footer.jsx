import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faHeart,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-gray-800 p-5 h-auto relative top-[33vh] md:top-auto md:flex md:flex-row space-y-5 md:space-y-0">
      <div>
        <p className="text-4xl bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent Cheese">
          Qrazy-Genie
        </p>
        <p className="text-white font-mono italic">
          Take the creative control to make QR codes that match your unique
          style and branding effortlessly
        </p>
      </div>

      <div className="md:ml-7">
        <p className="text-2xl text-white font-sans">Connect with me:</p>
        <div className="space-x-3 text-gray-500">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="hover:text-gray-300"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="hover:text-gray-300"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="hover:text-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
