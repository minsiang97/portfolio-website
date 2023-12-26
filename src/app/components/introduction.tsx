"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Introduction: React.FC = () => {
  return (
    <div className="px-5 sm:px-20">
      <div className="mt-20 pt-10">
        <h1 className="text-5xl mb-5">Hi, I am Min Siang</h1>
        <Typewriter
          options={{
            strings: [
              "Mobile Application Developer",
              "Frontend Developer",
              "Full Stack Developer",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter",
            cursorClassName: "typewriter",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
