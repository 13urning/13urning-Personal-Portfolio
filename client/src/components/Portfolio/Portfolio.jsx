import React from "react";
import clone from "../Assets/CISclone.PNG";
import bubbledemo from "../Assets/bubbledemo.png";
import twitterbot from "../Assets/twitterbot.png";
import pardotdemo from "../Assets/pardotdemo.png";

export default function Portfolio() {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          When I first started working, I've done an employee/company directory
          web app from scratch using ReactJS as my frontend and Python as my
          backend. The directory offers CRUD functionalities and an SSO login.
          The libraries we used for the frontend are AntD, Bootstrap, and Axios.
          While in the backend, I used Flask mainly for handling HTTP requests
          and processing data.
        </p>
      </div>
      <div className=" flex flex-col gap-10 py-10 text-center lg:flex-row lg:flex-wrap dark:text-gray-400">
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src={clone}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <small>
            A sample image of a sample project similar to the customer directory
            project I did for a company.
          </small>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover "
            src={bubbledemo}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <small>
            A prototype e-commerce website revamp that I made in Bubble.io.
          </small>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src={twitterbot}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <small>
            A personal Twitter bot I made using Twitter's API that tweets
            everyday.
          </small>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src={pardotdemo}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <small>A webinar registration I made in Pardot using Forms.</small>
        </div>
      </div>
    </div>
  );
}
