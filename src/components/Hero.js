import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-indigo-700 text-white"
      aria-labelledby="hero-heading"
    >
<div className="flex flex-col items-center justify-center min-h-[50vh] py-16 px-4">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 
          id="hero-heading" 
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Hi, I'm Deep Acharjee
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Frontend Developer and Web Enthusiast
        </p>
        
        <div className="pt-4">
          <a
            href="#projects"
            className="inline-block bg-white text-indigo-700 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;