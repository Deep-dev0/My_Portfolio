import React, { useEffect } from 'react';
import './FallingAnimation.css';

const FallingAnimation = () => {
    useEffect(() => {
        const container = document.querySelector('.falling-animation-container');
        const numberOfLines = 20;

        for (let i = 0; i < numberOfLines; i++) {
            const line = document.createElement('div');
            line.classList.add('line');
            line.textContent = Math.random() < 0.5 ? '0' : '1';
            line.style.left = `${Math.random() * 100}vw`;
            line.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(line);
        }
    }, []);

    return <div className="falling-animation-container"></div>;
};

export default FallingAnimation;
