import React, { useState } from 'react';
import '../Style.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container' id='home'>
      <h4 className='logo'>Mupashir <span>developer</span></h4>
      <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <a href="#Bio">Bio</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#about">About</a>
        <a href="#Contact">Contact</a>
      </nav>
      <div className='menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Header;
