import React from "react";
import "./project.css";
import SliderComp from "./SliderComp";

function Project() {
  return (
    <main className="main" id="Project">
      <h1>Projects</h1>
      <p>Description of this project</p>
      <slide>
        <SliderComp />
      </slide>
    </main>
  );
}
export default Project;
