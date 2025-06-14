import React, { useState } from 'react';

export default function NavbarProperty() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='navbar-property-satu'>
      <div className='navbar-logo-property-satu'>
        <span className='burger-property-satu'>Property</span>
      </div>

      <ul className={`navbar-links-property-satu ${isMenuOpen ? 'active' : ''}`}>
        <li className='active'>Home</li>
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>News</li>
        <li>Contac</li>
      </ul>

      <div className='hamburger-icon-property-satu' onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
