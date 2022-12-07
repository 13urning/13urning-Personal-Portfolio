import React from "react";
import clone from "../Assets/CISclone.PNG";

export default function Portfolio() {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          When I first started working, I've done an employee/company directory
          web app from scratch using ReactJS as my frontend and Python as my
          backend. The directory offers CRUD functionalities and an SSO login.
          The libraries we used for the frontend are AntD, Bootstrap, and Axios.
          While in the backend, I used Flask mainly for handling HTTP requests
          and processing data.
        </p>
      </div>
      <div>
        <div className="py-10 text-center">
          <img src={clone} alt="" />
          <small>
            A sample image of a sample project similar to the customer directory
            I did for a company.
          </small>
        </div>
      </div>
    </div>
  );
}
