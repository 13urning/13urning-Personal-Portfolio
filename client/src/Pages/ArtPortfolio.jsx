import React from "react";
import Header from "../components/Header/Header";

export default function ArtPortfolio() {
  return (
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
      <section>
        <Header />{" "}
      </section>
      <section>
        <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
          <div className="bg-gray-200 break-inside-avoid">
            <img src="" alt="" />
          </div>
          <div className="bg-gray-200 break-inside-avoid">
            <img src="" alt="" />
          </div>
          <div className="bg-gray-200 break-inside-avoid">
            <img src="" alt="" />
          </div>
          <div className="bg-gray-200 break-inside-avoid">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
