import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Heart } from "react-feather";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 flex flex-col py-3 relative md:top-auto">
      <div className="p-5 h-auto lg:flex md:flex-row space-y-5 md:space-y-0">
        <div>
          <Link to="/">
          <p className="text-4xl bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 bg-clip-text text-transparent Cheese">
            QRazy-Genie
          </p>
          </Link>
          <p className="text-white font-mono italic md:w-[60%]">
            Take the creative control to make QR codes that match your unique
            style and branding effortlessly
          </p>
        </div>

        <div className="lg:ml-7">
          <p className="text-2xl text-gray-300 font-sans mb-2 mt-10 lg:mt-0">
            Contact
          </p>
          <div className="space-x-3 text-gray-500">
            <a href="https://www.linkedin.com/in/hardik-malani-cybersecurity/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="hover:text-gray-300"
            />
            </a>
            <a href="https://github.com/hardik-malani" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="hover:text-gray-300"
            />
            </a>
            <a href="https://twitter.com/The__Good__Guy" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="hover:text-gray-300"
            />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center font-mono md:text-[25px] mt-10">
        <span className="text-[#ADFF45] hover:text-[#79c635]">Made with Love by Hardik&nbsp;</span>
        <Heart className="md:mt-[3px] md:w-8 md:h-8 text-red-500 hover:text-red-800"/>
      </div>
    </div>
  );
}
