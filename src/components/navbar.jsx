import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full">
      <div className="section-view">
        <nav className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-3xl font-bold font-sofia">
              <img 
                src="https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/logo/dj7wpc7f1jgvhj4bwmb1" 
                alt="Logo" 
                className="logo" 
              />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu hidden md:flex space-x-6 font-mono text-lg">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#service" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#project" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button md:hidden">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="absolute inset-0 z-20 bg-black opacity-50"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
  className={`absolute top-0 right-0 h-full z-30 bg-white transition-transform duration-300 transform ${
    isMobileMenuOpen ? "translate-x-0" : "hidden"
  }`}
  style={{
    width: '100px',
    height: 'auto',
    marginRight: '2px',
  }}
>
  
          <div className="flex flex-col items-center space-y-4 py-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>About Us</a>
            <a href="#service" className="text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Services</a>
            <a href="#project" className="text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
