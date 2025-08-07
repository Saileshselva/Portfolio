import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Machine Learning Enthusiast",
          "Deep Learning Researcher",
          "Open Source Contributor",
          "Full Stack Developer",
          "AI & Data Mining Explorer",
          "Tech Blogger",
          "Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
