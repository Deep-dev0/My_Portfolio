import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedHeroSection from './components/AnimatedHeroSection';
import ScrollableComponent from './components/ScrollableComponent';
import FallingAnimation from './components/Animation/FallingAnimation';
import ScrollAnimatedBox from './components/Animation/ScrollAnimatedBox';
function App() {
  return (
    <div>
      <Navbar />
      <ScrollAnimatedBox/>
      <AnimatedHeroSection />
      <About />
      <Projects />
      <ScrollableComponent /> 
      <FallingAnimation/>
      <Contact />
    </div>
  );
}

export default App;
