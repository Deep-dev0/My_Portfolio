import React, { useState } from 'react';
import demoImage from '../demo.jpg'; 

function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="about" className="py-20 px-8 bg-white text-center relative overflow-hidden z-10">
    
      <div className={`transition-all duration-500 ${showDetails ? 'blur-lg' : ''}`}>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">About Me</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I'm a passionate web developer skilled in React, Tailwind, and modern web technologies. 
          I love building beautiful and responsive web applications.
        </p>
      </div>

     
      <div className="mt-8 flex justify-center relative z-20">
        <div
          className="relative flex flex-col items-center transition-transform duration-500"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
       
          <img 
            src={demoImage}
            alt="Profile"
            className={`w-32 h-32 rounded-full transition-all duration-500 ${
              showDetails ? 'w-72 h-72 rounded-lg scale-105' : ''
            }`}
            onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
          />

    
          {showDetails && (
            <div className="mt-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-md p-4 shadow-lg text-gray-700 text-sm w-72 transition-all duration-500">
              <h3 className="text-xl font-semibold text-purple-700">Deep Acharjee</h3>
              <p className="mt-1 text-purple-700">Frontend Developer & Web Enthusiast</p>
              <p className="mt-2 text-purple-700"><strong>Age:</strong> 21</p>
              <p className="text-purple-700"><strong>Degree:</strong> BCA</p>
              <p className="text-purple-700"><strong>College:</strong> ICFAI University Tripura</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
