import "./slider.css";

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { EffectCoverflow } from "swiper";

// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Pokemon from "../../assets/pokemon.png";
import Parallex from "../../assets/parallex.png";
import HTML from "../../assets/animation.png";
import Design from "../../assets/design.png";
import Wish from "../../assets/Jule-assingment.png";

function Slider() {
  return (
    <div className="Container">
      <h1 className="Heading">Projects</h1>
      {/* <h1>Projects</h1> */}
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect="EffectCoverflow"
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      > */}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={true}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Pokemon} className="projectImage" alt="pokemon pics" />
          {/* <div className="disc">
            <h1>API</h1>
            <p>This project is based on API using javascript language.</p>
            <a href="">Website</a>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Design} className="projectImage" alt="design site" />
          {/* <div className="disc">
            <h1>Bread Basket</h1>
            <p>This website is based on design and color combination.</p>
            <a href="">Website</a>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTML} className="projectImage" alt="HTML animation" />
          {/* <div className="disc">
            <h1>HTML</h1>
            <p>This website is based on animation using HTML and CSS .</p>
            <a href="">Website</a>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Parallex} className="projectImage" alt="parallex site" />
          {/* <div className="disc">
            <h1>Parellex</h1>
            <p>This website is on parellex effect using advance css.</p>
            <a href="">Website</a>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Wish} className="projectImage" alt="Christmis site" />
          {/* <div className="disc">
            <h1>Wish-List</h1>
            <p>
              This website is based on Christmas project. <a href="">Website</a>
            </p>
          </div> */}
        </SwiperSlide>
        <div className="slider-controler">
          <button className="swiper-button-prev slider-arrow">prev</button>
          <button className="swiper-button-next slider-arrow">next</button>
        </div>
        ...
      </Swiper>
    </div>
  );
}
export default Slider;
