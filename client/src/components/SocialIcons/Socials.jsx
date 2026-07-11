import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
export default function Socials() {
  return (
    <div className="text-4xl flex justify-center gap-10 py-2 text-gray-600 dark:text-gray-300">
      <a
        href="http://twitter.com/jaregor"
        target="blank"
        className="hover:text-teal-500 transition-colors"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/regor-carlo-esconde-55570a195/"
        target="blank"
        className="hover:text-teal-500 transition-colors"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/13urning"
        target="blank"
        className="hover:text-teal-500 transition-colors"
      >
        <AiFillGithub />
      </a>
    </div>
  );
}
