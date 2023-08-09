/** @format */

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; // Import the Link component

export default function ProceduresCard() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const fitTitle = () => {
    const container = containerRef.current;
    const titleElement = titleRef.current;

    if (!container || !titleElement) return;

    titleElement.style.fontSize = "3rem"; // Starting font size
    titleElement.style.letterSpacing = "normal"; // Reset letter spacing

    const containerWidth = container.offsetWidth;
    const textWidth = titleElement.offsetWidth;

    if (textWidth >= containerWidth) {
      const scalingFactor = containerWidth / textWidth;
      const newFontSize =
        parseFloat(window.getComputedStyle(titleElement).fontSize) *
        scalingFactor;
      const newLetterSpacing =
        (containerWidth - textWidth * scalingFactor) /
        (titleElement.textContent.length - 1);

      titleElement.style.fontSize = `${newFontSize}px`;
      titleElement.style.letterSpacing = `${newLetterSpacing}px`;
    }
  };

  const [highlightRow, setHighlightRow] = useState(0);

  useEffect(() => {
    // Cycle through highlight rows every 3 seconds
    const highlightInterval = setInterval(() => {
      setHighlightRow((prevRow) => (prevRow + 1) % 4);
    }, 1500);

    return () => clearInterval(highlightInterval);
  }, []);

  useEffect(() => {
    fitTitle();
    window.addEventListener("resize", fitTitle);

    return () => window.removeEventListener("resize", fitTitle);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center h-full w-full m-0 p-0 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/procedures-legs.png')",
        minHeight: "100vh",
        marginTop: "-70px",
        zIndex: -99,
      }}
    >
      <div
        ref={containerRef}
        className="bg-transparent w-2/5 mt-64 justify-center -ml-64"
      >
        {" "}
        {/* 60% width */}
        <p className="text-xl font-bold text-gray-200 text-center ">
          “You don&#39;t pay for your beauty surgery - You pay for your unique
          experience“
        </p>
        <h1
          ref={titleRef}
          className="text-xl font-bold tracking-widest text-center mt-5 text-gray-200"
          style={{ scale: "1.70" }}
        >
          {" "}
          {/* Larger starting font */}
          OUR PROCEDURES
        </h1>
        <div className="grid grid-cols-2 text-5xl mt-12 px-5 font-bold text-gray-400">
          <p className={`text-left ${highlightRow === 0 ? "fade-in" : ""}`}>
            BEAUTY
          </p>
          <p className={`text-right ${highlightRow === 0 ? "fade-in" : ""}`}>
            SURGERY
          </p>
          <p
            className={`text-left mt-2 ${highlightRow === 1 ? "fade-in" : ""}`}
          >
            GENDER
          </p>
          <p
            className={`text-right mt-2 ${highlightRow === 1 ? "fade-in" : ""}`}
          >
            TRANSITIONING
          </p>
          <p
            className={`text-left mt-2 ${highlightRow === 2 ? "fade-in" : ""}`}
          >
            AESTHETIC
          </p>
          <p
            className={`text-right mt-2 ${highlightRow === 2 ? "fade-in" : ""}`}
          >
            NON-SURGICAL
          </p>
          <p
            className={`text-left mt-2 ${highlightRow === 3 ? "fade-in" : ""}`}
          >
            DENTAL
          </p>
          <p
            className={`text-right mt-2 ${highlightRow === 3 ? "fade-in" : ""}`}
          >
            TREATMENTS
          </p>
        </div>
        <div className="flex justify-center cursor-pointer">
          <Link href="/procedures/type/page" passHref>
            <button
              className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 shadow-lg hover:shadow-xl transition-all mt-8 w-64 hover:text-white"
              style={{ borderRadius: "4px" }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
