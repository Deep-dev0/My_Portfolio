import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DigiShop1 from './images/DigiShop.png';      
import DigiShop2 from './images/DigiShop2.png';     
import DigiShop3 from './images/DigiShop3.png';     
import ChatApp1 from './images/ChatApp.png';        
import ChatApp2 from './images/ChatApp2.png';       

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully-featured e-commerce platform built using the MERN stack.',
      images: [DigiShop1, DigiShop2, DigiShop3],
      link: 'https://github.com/Deep-dev0/DigiShop',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat app with user authentication and notifications.',
      images: [ChatApp1, ChatApp2],
      link: 'https://github.com/Deep-dev0/Chat-App',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(Array(projects.length).fill(0));
  const [imageLoadError, setImageLoadError] = useState(Array(projects.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndices) =>
        prevIndices.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [projects]);

  const handleImageError = (index) => {
    setImageLoadError((prev) => {
      const newErrorState = [...prev];
      newErrorState[index] = true; 
      return newErrorState;
    });
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-center mb-8">
        Projects
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {projects.map((project, projectIndex) => (
          <motion.div 
            key={projectIndex} 
            className="relative group bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full sm:w-80" // Adjusted for responsive width
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
          >
            <div 
              className="relative w-full h-48 overflow-hidden"
              onMouseEnter={() => setCurrentImageIndex((prevIndices) => 
                prevIndices.map((index, i) => i === projectIndex ? (index + 1) % project.images.length : index)
              )}
            >
              <img 
                src={imageLoadError[projectIndex] ? 'path_to_fallback_image.jpg' : project.images[currentImageIndex[projectIndex]]} 
                alt={project.title} 
                onError={() => handleImageError(projectIndex)} 
                className="w-full h-full object-cover group-hover:opacity-75 transition duration-300" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-indigo-600">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
