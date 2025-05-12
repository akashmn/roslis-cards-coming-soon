import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [typedText, setTypedText] = useState('');
  const text = 'Cooming Soon to you';

  useEffect(() => {
    // Animate title drop-in
    if (titleRef.current) {
      titleRef.current.classList.add('animate-in');
    }

    // Typewriter logic
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 100); // Adjust speed here
      }
    };

    const startDelay = setTimeout(() => {
      typeWriter();
    }, 1000);

    return () => clearTimeout(startDelay); // Cleanup on unmount
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          Welcome to Roslis
        </h1>
        <div className="hero-subtitle">
          <div className="typewriter">{typedText}</div>
          <div className="cursor"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
