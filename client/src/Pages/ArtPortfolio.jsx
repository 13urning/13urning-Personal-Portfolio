import React from "react";
import Header from "../components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../components/Assets/acceptance.jpg";
import image2 from "../components/Assets/desire.png";
import image3 from "../components/Assets/gaze.jpg";
import image4 from "../components/Assets/Rengshiba.jpg";
import image5 from "../components/Assets/LadyInSilk.png";
import image6 from "../components/Assets/anxiety.png";
import image7 from "../components/Assets/2020try.jpg";
import image8 from "../components/Assets/Apathy.jpg";

export default function ArtPortfolio() {
  return (
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
      <section>
        <Header />{" "}
      </section>
      <section className="flex justify-center">
        <Carousel
          // width={"400px"}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={true}
          infiniteLoop={true}
          className="mx-auto max-w-lg"
        >
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
          <div>
            <img src={image5} alt="" />
          </div>
          <div>
            <img src={image6} alt="" />
          </div>
          <div>
            <img src={image7} alt="" />
          </div>
          <div>
            <img src={image8} alt="" />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
