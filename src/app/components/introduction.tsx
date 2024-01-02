"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import ComputersCanvas from "./desktop";

const Introduction: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="mt-20 pt-10 px-5 sm:px-10 md:px-20 absolute top-0 flex flex-row">
        <div className="me-5 flex flex-col items-center">
          <div className="rounded-full w-5 h-5 bg-[#5390D9]" />
          <div className="w-1 h-40 bg-gradient-to-b from-[#5390D9] md:h-80" />
        </div>
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl mb-5 text-white">
            Hi, I am <span className="name">Min Siang</span>
          </h1>
          <Typewriter
            options={{
              strings: [
                "Mobile Application Developer",
                "Frontend Developer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter text-2xl sm:text-4xl lg:text-6xl",
              cursorClassName: "typewriter text-2xl sm:text-4xl lg:text-6xl",
            }}
          />
        </div>
      </div>
      <ComputersCanvas />
    </div>
  );
};

export default Introduction;
