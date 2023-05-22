import React, { useEffect } from "react";
import { TagCloud as TagCloudBase } from "@frank-mayer/react-tag-cloud";
import "./rotate.css";
// import TagCloud from "TagCloud";

function Rotate() {
  return (
    <TagCloudBase
      options={(window) => ({
        radius: Math.min(300, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "normal",
      })}
      onClick={(tag) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "Git",
        "GitHub",
        "Figma",
        "SQL",
        "MongoDB",
        "Visual Studio",
        "C#",
        ".Net",
      ]}
    </TagCloudBase>
  );

  // useEffect(() => {
  //   return () => {
  //     const container = ".tagcloud";
  //     const texts = [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React",
  //       "NodeJS",
  //       "Git",
  //       "GitHub",
  //       "Figma",
  //       "SQL",
  //       "MongoDB",
  //       "Visual Studio",
  //       "C#",
  //       ".Net",
  //     ];
  //     const options = {
  //       radius: 300,
  //       maxSpeed: "normal",
  //       initSpeed: "normal",
  //       keep: true,
  //     };

  //     TagCloud(container, texts, options);
  //   };
  // }, []);

  // return (
  //   <main>
  //     <div className="text-shpere">
  //       <span className="tagcloud"></span>
  //     </div>
  //   </main>
  // );
}

export default Rotate;
