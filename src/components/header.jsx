import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Ensure you have installed Typed.js via npm
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Header() {
  useEffect(() => {
    const options = {
      strings: ["Web Designer", "Web Developer", "Front End Developer"],
      typeSpeed: 1000,
      backSpeed: 30,
      smartBackspace: false,
      loop: true,
    };
    
    const typed = new Typed("#typeWritten h2", options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="desktop-view relative h-screen content-center">
      <div className="flex justify-center mt-12 md:mt-0 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mt-8 md:mt-0">Bhumika Pandey</h1>
          <div id="typeWritten" className="mt-4">
            <h2 className="text-2xl"></h2>
          </div>
          <ul className="inline-flex space-x-6 mt-6">
            <li>
              <a href="https://www.linkedin.com/in/bhumika-pandey-1272472b2/" aria-label="LinkedIn"
                className="text-2xl text-gray-700 hover:text-blue-600">
<FaLinkedin />              </a>
            </li>
            <li>
              <a href="https://github.com/Bhumika26665" aria-label="GitHub"
                className="text-2xl text-gray-700 hover:text-blue-600">
                <FaSquareGithub />
              </a>
            </li>
            <li>
              <a href="https://x.com/pandeyBhumika34" aria-label="Twitter"
                className="text-2xl text-gray-700 hover:text-blue-600">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
