import React from "react";
import "./project.css";
import SliderComp from "./SliderComp";
// import Slider from "react-slick";
// import PokemonCard from "./PokemonCard";
// import DesignCard from "./DesignCard";
// import HTMLCard from "./HTMLCard";
// import ParellexCard from "./ParellexCard";
// import ChristmasCard from "./ChristmasCard";

function Project() {
  // const settings = {
  //   arrows: true,
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <main className="main" id="Project">
      <h1>Projects</h1>
      <p>Description of this project</p>
      <slide>
        <SliderComp />
      </slide>
      {/* <Slider {...settings}> */}
      {/* <div className="projectContainer"> */}
      {/* <slide>
        <PokemonCard />
        <DesignCard />
        <HTMLCard />
        <ParellexCard />
        <ChristmasCard />
      </slide> */}

      {/* </div> */}
      {/* </Slider> */}
    </main>
  );
}
export default Project;
