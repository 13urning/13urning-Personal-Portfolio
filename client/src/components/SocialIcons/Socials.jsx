import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
export default function Socials() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-300">
      <a href="http://twitter.com/jaregor" target="blank">
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/regor-carlo-esconde-55570a195/"
        target="blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/13urning" target="blank">
        <AiFillGithub />
      </a>
    </div>
  );
}
