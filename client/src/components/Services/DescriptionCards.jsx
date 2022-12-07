import React from "react";
import code from "../Assets/code.png";
import pardot from "../Assets/pardot.png";
import bubble from "../Assets/bubbleio.png";
import nodelogo from "../Assets/nodejslogo.png";
import flasklogo from "../Assets/flasklogo.png";
import mysqllogo from "../Assets/mysql.png";
import expresslogo from "../Assets/expresslogo.png";
import reactlogo from "../Assets/reactlogo.png";
import csslogo from "../Assets/css logo.png";
import htmllogo from "../Assets/htmllogo.png";
import javascriptlogo from "../Assets/javascriptlogo.png";
import tailwindlogo from "../Assets/tailwindlogo.png";
import pythonlogo from "../Assets/pythonlogo.png";
export default function DescriptionCards() {
  return (
    <div className=" lg:flex gap-10 justify-center ">
      <div className="text-center shadow-xl p-10 rounded-xl my-10 max-w-lg mx-auto">
        <img
          src={code}
          className="mx-auto"
          style={{ width: "100px", height: "100px" }}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Coding</h3>
        <p className="py-2 leading-8 max-w-md">
          Creating ReactJS web applications, Python automations, and Pardot
          forms and landing pages.
        </p>
        <h4 className="py-4 text-teal-600">Languages and Frameworks I use</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <img className="mx-auto py-2 w-44 my-auto " src={reactlogo} alt="" />
          <img className="mx-auto py-2 w-44 my-auto" src={expresslogo} alt="" />
          <img
            className="mx-auto py-2 w-44 my-auto"
            src={tailwindlogo}
            alt=""
          />
          <img className="mx-auto py-2 w-20 my-auto" src={csslogo} alt="" />
          <img
            className="mx-auto py-2 w-28 my-auto"
            src={javascriptlogo}
            alt=""
          />
          <img className="mx-auto py-2 w-28 my-auto" src={htmllogo} alt="" />

          <img className="mx-auto py-2 w-44 my-auto" src={pythonlogo} alt="" />
          <img className="mx-auto py-2 w-44 my-auto" src={flasklogo} alt="" />

          <img className="mx-auto py-2 w-44 my-auto" src={nodelogo} alt="" />
          <img
            className="mx-auto py-2 w-44 my-auto col-start-2"
            src={mysqllogo}
            alt=""
          />
        </div>

        {/* <p className="text-gray-800 py-1">ReactJS</p>
        <p className="text-gray-800 py-1">Python</p>
        <p className="text-gray-800 py-1">Flask</p>
        <p className="text-gray-800 py-1">HTML</p>
        <p className="text-gray-800 py-1">CSS</p>
        <p className="text-gray-800 py-1">Tailwind CSS</p>
        <p className="text-gray-800 py-1">NodeJS</p>
        <p className="text-gray-800 py-1">ExpressJS</p>
        <p className="text-gray-800 py-1">Javascript</p>
        <p className="text-gray-800 py-1">MySQL</p> */}
      </div>
      <div className="text-center shadow-xl p-10 rounded-xl my-10 max-w-lg mx-auto">
        <img
          src={pardot}
          className="mx-auto"
          style={{ width: "150px", height: "100px" }}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Pardot</h3>
        <p className="py-2 leading-8">
          Experience in handling and creating Pardot components.
        </p>
        <h4 className="py-4 text-teal-600">
          Pardot components I create and handle
        </h4>
        <p className="text-gray-800 py-1">Forms</p>
        <p className="text-gray-800 py-1">Landing Pages</p>
        <p className="text-gray-800 py-1">Layouts</p>
      </div>
      <div className="text-center shadow-xl p-10 rounded-xl my-10 max-w-lg mx-auto">
        <img
          src={bubble}
          className="mx-auto"
          style={{ width: "100px", height: "100px" }}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Bubble.io Dev</h3>
        <p className="py-2 leading-8">
          Creating <span className=" text-teal-500">no-code</span> responsive
          web applications.
        </p>
      </div>
    </div>
  );
}
