import React, { useState, useEffect } from 'react';

const ScrollAnimatedBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[1000px]">
      <div
        className="transform-style-3d"
        style={{
          transform: `rotateX(${scrollPosition * 0.1}deg)
                      rotateY(${scrollPosition * 0.1}deg)
                      translateX(${Math.sin(scrollPosition * 0.003) * 100}px)
                      translateY(${Math.cos(scrollPosition * 0.003) * 100}px)
                      translateZ(${Math.sin(scrollPosition * 0.003) * 100}px)`,
        }}
      >
        {/* 3D Box */}
        <div className="relative w-32 h-32 transform-style-3d">
          {/* Front face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform translate-z-16"></div> {/* Changed line */}
          {/* Back face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform -translate-z-16"></div> {/* Changed line */}
          {/* Right face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform translate-x-16 rotate-y-90"></div> {/* Changed line */}
          {/* Left face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform -translate-x-16 -rotate-y-90"></div> {/* Changed line */}
          {/* Top face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform -translate-y-16 rotate-x-90"></div> {/* Changed line */}
          {/* Bottom face */}
          <div className="absolute w-32 h-32 border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 transform translate-y-16 -rotate-x-90"></div> {/* Changed line */}
        </div>
      </div>

    
      <style jsx>{`
        .perspective-[1000px] {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .translate-z-16 {
          transform: translateZ(4rem);
        }

        .-translate-z-16 {
          transform: translateZ(-4rem);
        }

        .translate-x-16 {
          transform: translateX(4rem);
        }

        .-translate-x-16 {
          transform: translateX(-4rem);
        }

        .translate-y-16 {
          transform: translateY(4rem);
        }

        .-translate-y-16 {
          transform: translateY(-4rem);
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .-rotate-y-90 {
          transform: rotateY(-90deg);
        }

        .rotate-x-90 {
          transform: rotateX(90deg);
        }

        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }
      `}</style>
    </div>
  );
};

export default ScrollAnimatedBox;
