import React from "react";
import clone from "../Assets/CISclone.PNG";
import cis2 from "../Assets/cis2.png";
import bubbledemo from "../Assets/bubbledemo.png";
import twitterbot from "../Assets/twitterbot.png";
import pardotdemo from "../Assets/pardotdemo.png";
import minecom from "../Assets/minecom.PNG";
import minecom1 from "../Assets/minecom1.PNG";
import minecom2 from "../Assets/minecom2.PNG";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 my-10 md:flex-row">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <img src={pardotdemo} alt="" />
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="animate-typing text-xl mb-2 font-semibold">
            Pardot Landing Pages
          </h3>
          <p className="text-md font-medium text-gray-500">
            I've created Pardot Landing Page Templates for the client's
            marketing team through HTML and CSS, these landing pages are used in
            Webinar registrations when sending out emails by the client.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              HTML
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              CSS
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 my-10 md:flex-row-reverse">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            emulateTouch={true}
            showArrows={false}
            stopOnHover={true}
            infiniteLoop
            autoPlay
          >
            <div>
              <img src={minecom} alt="" />
            </div>
            <div>
              <img src={minecom1} alt="" />
            </div>
            <div>
              <img src={minecom2} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="animate-typing text-xl mb-2 font-semibold">
            Minimalist E-Commerce
          </h3>
          <p className="text-md font-medium text-gray-500">
            I've created responsive templates for E-Commerce websites. In this
            project, I've focused on simplicity and clean design making it easy
            for customers to find and purchase the products they need.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              REACTJS
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              TAILWIND
            </p>
          </div>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <a
              href="https://minimalist-e-commerce-gamma.vercel.app"
              target="_blank"
              className="shadow-xl p-3 rounded-md border hover:bg-gray-100"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 my-10  md:flex-row">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <img src={bubbledemo} alt="" />
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="animate-typing text-xl mb-2 font-semibold">
            E-commerce layout made in Bubble.io
          </h3>
          <p className="text-md font-medium text-gray-500">
            I've created E-commerce layouts in Bubble.io that is later to be
            used for the client's DigiShop. While creating these layouts, I've
            also had experience dealing with Bubble.io's backend and
            automations.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              BUBBLE.IO
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-lg h-70 p-6 my-10 md:flex-row-reverse">
        <div className="rounded-2xl h-auto w-md overflow-hidden shadow mx-auto md:mx-2 md:w-2/3 ">
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            emulateTouch={true}
            showArrows={false}
            stopOnHover={true}
            infiniteLoop
            autoPlay
          >
            <div>
              <img src={clone} alt="" />
            </div>
            <div>
              <img src={cis2} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="mx-auto flex flex-col h-auto justify-center text-center my-4 w-md min-w-sm md:w-1/3">
          <h3 className="text-xl mb-2 font-semibold">
            Customer Intelligence System{" "}
          </h3>
          <p className="text-md font-medium text-gray-500">
            Customer Intelligence System is basically a search directory for our
            clients to use if they want to search information about a customer's
            company and to identify the agent handling the company. CIS is also
            used to search for fraudelent company to identify if they are
            blacklisted by the client.
          </p>
          <div className="text-sm font-medium flex gap-3 mt-5 justify-center">
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              REACTJS
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              CSS
            </p>
            <p className="shadow-xl p-3 rounded-md border hover:bg-gray-100">
              PYTHON
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col gap-10 py-10 text-center lg:flex-row lg:flex-wrap dark:text-gray-400">
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
      </div> */}
    </div>
  );
}
