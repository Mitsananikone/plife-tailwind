/** @format */

import React, { useEffect, useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  const fitText = () => {
    const container = containerRef.current;
    if (!container) return;

    const fitTitle = (titleRef, text) => {
      const svgNS = "http://www.w3.org/2000/svg";
      const textElement = titleRef.current;

      // Set the SVG text content
      textElement.textContent = text;

      // Create a temporary path to measure the length
      const path = document.createElementNS(svgNS, "path");
      path.setAttributeNS(null, "d", `M0,0h${container.offsetWidth}`);
      container.appendChild(path);

      // Adjust the text path to fit the container width
      textElement.setAttributeNS(null, "lengthAdjust", "spacingAndGlyphs");
      textElement.setAttributeNS(null, "textLength", container.offsetWidth);

      // Remove the temporary path
      container.removeChild(path);
    };

    fitTitle(title1Ref, "UNIQUE BEAUTY SURGERY");
    fitTitle(title2Ref, "EXPERIENCE IN THAILAND");
  };

  useEffect(() => {
    fitText();
    window.addEventListener("resize", fitText);

    return () => window.removeEventListener("resize", fitText);
  }, []);

  return (
    <div
    className="flex justify-center h-full w-full m-0 p-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/about-sand.png')",
      minHeight: "100vh",
      marginTop: "-70px",
      zIndex: -99,
    }}
  >
    <div className="text-white ml-64" style={{ width: "45%" }}>
      <div className="bg-transparent mt-56">
        <h1 className="stretch-text text-5xl text-center tracking-widest">
          UNIQUE BEAUTY SURGERY
        </h1>
        <h2 className="stretch-text text-5xl text-center tracking-widest ">
          EXPERIENCE IN THAILAND
        </h2>
        <p className="text-base w-full text-justify text-xl p-8">
          “Welcome to PHEONIQUE.LIFE, where we specialize in providing the
          ultimate cosmetic surgery holiday experience. Our experienced team
          combined with top surgeons and specialists will ensure that you
          receive the highest level of care and achieve your desired results.
          From breast augmentation to facelifts, we offer a wide range of
          procedures at an affordable cost. With the added bonus of a holiday
          destination, you can relax and rejuvenate both inside and out. Let us
          help you enhance your natural beauty and boost your confidence.
          Contact us today to start planning your cosmetic surgery holiday!”
        </p>
      </div>
      <button
        className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 align-middle shadow-lg hover:shadow-xl transition-all float-right mr-8"
        style={{ borderRadius: '4px' }}
      >
        REQUEST QUOTE
      </button>
    </div>
  </div>
  );
}
