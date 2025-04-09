import React from 'react';

function About() {
  return (
    <div id="about" className="section">
      <div className="section-view2 bg-gradient-custom py-10 h-lvh">
        <div className="container mx-auto flex flex-col-reverse md:flex-row">
          <div className="flex-shrink-0 md:w-1/2 flex justify-center w-full md:w-3/4 xl:w-[400px] xl:h-[360px]">
            <img
              src="https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/n1q9nvsr4qwmpkffkoyr"
              alt="Profile Image"
              className="w-3/4 border-2 border-black shadow-lg"
            />
          </div>
          <div className="bg-white shadow-md p-6 md:w-1/2">
            <h3 className="text-3xl font-semibold">Bhumika Pandey</h3>
            <h5 className="text-xl mt-4">MERN Stack Developer</h5>
            <p className="mt-4">
              I am a passionate and results-driven web developer with hands-on experience in building full-stack web applications using the MERN stack. My projects reflect my commitment to creating responsive, user-friendly, and high-performance web solutions.
            </p>
            
            <div>
              <a href="#contact">
                <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
