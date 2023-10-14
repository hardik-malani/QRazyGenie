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

export default function Footer() {
  return (
    <div className="bg-gray-800 flex flex-col py-3 relative top-[33vh] md:top-auto">
      <div className="p-5 h-auto lg:flex md:flex-row space-y-5 md:space-y-0">
        <div>
          <p className="text-4xl bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent Cheese">
            QRazy-Genie
          </p>
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
      <div className="w-[100%] flex justify-center text-[#ADFF45] font-mono md:text-[25px] mt-10">
        <span>Made with Love&nbsp;</span>
        <span> by Hardik&nbsp;</span>
        <Heart color="red" className="md:mt-[3px] md:w-8 md:h-8"/>
      </div>
    </div>
  );
}
