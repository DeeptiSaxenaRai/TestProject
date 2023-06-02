// import Slider from "react-slick";
import Slider from "react-slick";
import "./sliderComponent.css";
import React, { Component } from "react";

import PokemonCard from "./PokemonCard";
import DesignCard from "./DesignCard";
import HTMLCard from "./HTMLCard";
import ParellexCard from "./ParellexCard";
import ChristmasCard from "./ChristmasCard";

function SliderComp() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <PokemonCard />
      </div>
      <div>
        <DesignCard />
      </div>
      <div>
        {" "}
        <HTMLCard />
      </div>
      <div>
        <ParellexCard />
      </div>
      <div>
        <ChristmasCard />
      </div>
    </Slider>
  );
}

export default SliderComp;
