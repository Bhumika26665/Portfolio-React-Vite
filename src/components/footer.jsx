import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Footer = () => {
  useEffect(() => {
    // Ensure the element is available before initializing Typed.js
   

  

    // Toggle mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('open');
    });

    // Clean up the event listener on unmount
    return () => {
      menuBtn?.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold text-white mb-4">About Me</h2>
            <p className="text-gray-400 mb-4">
              I'm Bhumika Pandey, a freelance designer and developer passionate about building responsive, user-friendly websites.
            </p>
            <a href="#contact" className="text-indigo-500 hover:text-indigo-400 transition-colors duration-300">
              Get in Touch
            </a>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#project" className="hover:text-indigo-500 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-indigo-500 transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-indigo-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold text-white mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/bhumika-pandey-1272472b2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transform hover:-translate-y-1 transition-transform duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46C23.21 24 24 23.21 24 22.23V1.77C24 .79 23.21 0 22.23 0zM7.09 20.45H3.56V9.04h3.53v11.41zm-1.76-13a2.04 2.04 0 110-4.08 2.04 2.04 0 110 4.08zm15.09 13h-3.53v-5.59c0-1.33-.47-2.23-1.66-2.23-.91 0-1.45.61-1.69 1.2-.09.23-.11.55-.11.87v5.75h-3.53s.05-9.33 0-10.3h3.53v1.46c.47-.73 1.31-1.77 3.18-1.77 2.32 0 4.06 1.51 4.06 4.76v6.85z"/>
                </svg>
              </a>
              <a href="https://github.com/Bhumika26665" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transform hover:-translate-y-1 transition-transform duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .3a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.58-4.04-1.58a3.16 3.16 0 00-1.32-1.74c-1.08-.73.08-.72.08-.72a2.5 2.5 0 011.82 1.22 2.5 2.5 0 003.42 1 2.5 2.5 0 01.75-1.58c-2.67-.3-5.47-1.34-5.47-5.95a4.66 4.66 0 011.23-3.23 4.32 4.32 0 01.12-3.18s1-.32 3.26 1.22a11.25 11.25 0 015.94 0c2.24-1.54 3.26-1.22 3.26-1.22a4.3 4.3 0 01.12 3.18 4.66 4.66 0 011.23 3.23c0 4.62-2.81 5.65-5.49 5.94a2.81 2.81 0 01.81 2.18v3.24c0 .31.21.69.83.57A12 12 0 0012 .3z"/>
                </svg>
              </a>
              <a href="https://x.com/pandeyBhumika34" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-indigo-500 transform hover:-translate-y-1 transition-transform duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.94 4.56a10 10 0 01-2.82.77 4.92 4.92 0 002.16-2.72 9.84 9.84 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48 13.95 13.95 0 01-10.11-5.13 4.92 4.92 0 001.52 6.57 4.89 4.89 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.9 9.9 0 010 20.54a13.94 13.94 0 007.56 2.21c9.05 0 14-7.5 14-14v-.64A10 10 0 0024 5.44a9.9 9.9 0 01-2.06 2.12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Bhumika Pandey. All Rights Reserved.</p>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
