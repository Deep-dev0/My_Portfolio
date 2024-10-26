import React, { useState, useEffect } from "react";
import CV from "./Resume/CV.docx";

const AnimatedHeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Deep Acharjee";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent && !typingComplete) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, 100); 

      return () => clearInterval(typingInterval);
    }
  }, [showContent, typingComplete]);

  return (
    <div id="hero" className="min-h-screen bg-white relative bg-opacity-80">
      <div
        className={`fixed inset-0 bg-indigo-600 flex items-center justify-center transition-opacity duration-500 z-50 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative">
          <div className="w-16 h-16 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold">D</span>
          </div>
        </div>
      </div>
      <div
        className={`transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-opacity-90">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-2xl p-16 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center pb-2 leading-normal">
              {displayText}
              <span
                className={`inline-block ${typingComplete ? "hidden" : ""}`}
              >
                |
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-gray-600 transition-opacity duration-700 delay-300 ${
                showContent ? "opacity-100 glow" : "opacity-0"
              } mb-8 text-center`}
            >
              Frontend Developer and Web Enthusiast
            </p>
            <div
              className={`transition-all duration-700 delay-500 ${
                showContent
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-95"
              }`}
            >
              <a
                href="#projects"
                className="inline-block bg-white text-indigo-700 py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8">
              <a
               
                href={CV}
                download
                className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-purple-600 text-purple-600 bg-white text-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroSection;
