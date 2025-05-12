import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <footer 
      className={`footer ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>© 2025 Made with 🤍</p>
    </footer>
  );
};

export default Footer;