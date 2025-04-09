import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
function Navbar() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="section-view">
        <nav className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-3xl font-bold font-sofia">
              <img src="https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/logo/dj7wpc7f1jgvhj4bwmb1" alt="Logo" className="logo" />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu hidden md:flex space-x-6 font-mono text-lg">
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About Us
              </a>
              <a href="#service" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#project" className="text-gray-700 hover:text-blue-600">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button md:hidden">
              <button onClick={toggleMobileMenu} id="menu-btn">
                {/* <i className="fa fa-bars text-3xl"></i> */}
                <IoMdMenu className="text-3xl"/>
              </button>
            </div>
          </div>
        </nav>
        <div id="home" className="section">
          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`mobile-menu bg-white shadow-md p-4 md:hidden ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="#service" className="block py-2 text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#project" className="block py-2 text-gray-700 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
