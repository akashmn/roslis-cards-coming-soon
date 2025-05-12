import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <nav 
      className={`navbar ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">Roslis</div>
          <a href="#" className="nav-link active">Home</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;