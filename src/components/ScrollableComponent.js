import React, { useState, useEffect } from 'react';

const ScrollComponent = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);

     
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  
  const scrollbarHeight = Math.max(20, Math.min(100, window.innerHeight - scrollPos / 2));

  return (
    <div className="h-0 w-full overflow-hidden">
      
      <div 
        className={`fixed right-0 top-0 w-2 bg-purple-600 transition-opacity duration-300 ${
          isScrolling ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          height: `${scrollbarHeight}px`, 
          top: `${scrollPos}px`, 
        }}
      />


    </div>
  );
};

export default ScrollComponent;
