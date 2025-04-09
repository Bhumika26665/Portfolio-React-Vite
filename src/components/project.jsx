import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/cdw3xrs9hmyjunr8ozkw',
      altText: 'ICJ24 News Channel',
      date: 'jan 12, 2025',
      description: 'ICJ24 is a dynamic news website built using the MERN stack (MongoDB, Express.js, React, Node.js). The website is designed to deliver live news updates in real-time, offering users an up-to-date and responsive interface. The news is fetched from APIs, and the websites layout adjusts dynamically based on the device used. The website features a simple and clean UI/UX design, focusing on a seamless user experience, ensuring that visitors can easily browse and read the latest news. The real-time news feed is updated automatically without the need to refresh the page, thanks to WebSocket technology.',
    },
    {
      id: 2,
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/s4lbu3ucpclmxhkg5y79',
      altText: 'Real-Time-Chat App',
      date: 'May 16, 2024',
      description: 'A dynamic real-time chat application that enables users to create accounts, engage in one-on-one conversations, and share text messages and images. The app uses Socket.io for real-time communication, delivering instant updates and notifications. Built with React.js for a responsive design, it ensures users can chat anytime, anywhere.',
    },
    {
      id: 3,
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/q7ibl9x5sm31kvn4wxdq',
      altText: 'E-commerce Website',
      date: 'July 10, 2024',
      description: 'The Women\'s Clothing E-commerce Website is a comprehensive and user-friendly online shopping platform designed specifically for women who are passionate about fashion and want access to the latest trends, stylish apparel, and trendy accessories. This platform offers a curated selection of high-quality clothing, from casual wear to elegant evening outfits, making it the go-to destination for every fashion-forward woman.The website is designed with a seamless shopping experience in mind, ensuring users can easily browse through an extensive range of products, filter by size, color, style, and price, and make secure purchases. The intuitive and responsive design is optimized for all devices, whether you\'re shopping from your desktop, tablet, or smartphone, ensuring a smooth and enjoyable experience on every screen.',
    },
  ];

  // Helper function to limit description to 30 words
  const limitDescription = (description, wordLimit = 20) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
  };

  return (
    <div id="project" className="section">
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-gray-600">Explore our featured projects that showcase innovation, creativity, and technical expertise.</p>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center">
                <img
                  className="object-cover transition-opacity duration-300 hover:opacity-80"
                  style={{ width: index === 2 ? '290px' : '290px' }}
                  src={project.imageSrc}
                  alt={project.altText}
                />
              </div>
              <Link to={`/project/${project.id}`}>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <span>{project.date}</span>
                    <span className="mx-2">•</span>
                  </div>
                  <h3 className="text-md font-semibold text-gray-900 transition-colors duration-300 hover:text-indigo-500">
                    {limitDescription(project.description)}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
