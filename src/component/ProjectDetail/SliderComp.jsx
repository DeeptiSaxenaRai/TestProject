// import Slider from "react-slick";
import Slider from "react-slick";
import "./sliderComponent.css";
import React, { Component } from "react";

import PokemonCard from "./PokemonCard";
import DesignCard from "./DesignCard";
import HTMLCard from "./HTMLCard";
import ParellexCard from "./ParellexCard";
import ChristmasCard from "./ChristmasCard";

// import ProjectData from "./ProjectData";
// import Pokemon from "../../assets/pokemon.png";
// import Design from "../../assets/design.png";
// import HTML from "../../assets/animation.png";
// import Parallex from "../../assets/parallex.png";
// import Wish from "../../assets/Jule-assingment.png";

// let data = [
//   {
//     img: { Pokemon },
//     disc: "Pokemon Description",
//   },
//   {
//     img: { Design },
//     disc: "Design Description",
//   },
//   {
//     img: { HTML },
//     disc: "Animation Description",
//   },
//   {
//     img: { Parallex },
//     disc: "Parallex Description",
//   },
//   {
//     img: { Wish },
//     disc: "Christmas assingment Description",
//   },
// ];

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
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
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

function SliderComp() {
  // let sliderProject = "";
  // sliderProject = data.map((item, i) => <ProjectData item={item} key={i} />);
  return (
    <Slider {...settings}>
      {/* {sliderProject} */}
      <div>
        <PokemonCard />
      </div>
      <div>
        <DesignCard />
      </div>
      <div>
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
