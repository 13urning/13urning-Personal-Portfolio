import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="py-5 mb-5 flex justify-between">
      <h1 className="text-xl font-burtons">developedbyregor</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5 md:ml-8"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-2 md:ml-3"
          >
            Art
          </a>
        </li>
      </ul>
    </nav>
  );
}
