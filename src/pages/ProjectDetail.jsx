import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  // Updated Projects data based on your resume
  const projects = [
   
    {
      id: "1",
      title: "ICJ24 News Website",
      description: "ICJ24 is a dynamic news website built using the MERN stack (MongoDB, Express.js, React, Node.js). The website is designed to deliver live news updates in real-time, offering users an up-to-date and responsive interface. The news is fetched from APIs, and the website's layout adjusts dynamically based on the device used.The website features a simple and clean UI/UX design, focusing on a seamless user experience, ensuring that visitors can easily browse and read the latest news. The real-time news feed is updated automatically without the need to refresh the page, thanks to WebSocket technology.",
      link: "https://icj24.vercel.app/",
      image: "https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/cdw3xrs9hmyjunr8ozkw",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Live News Feed: Displays the latest headlines and news stories.",
        "Real-Time Updates: News articles are updated automatically without needing to refresh the page.",
        "Responsive Layout: Optimized for both mobile and desktop users.",
        "Article Search: Allows users to search for specific news articles.",
        "User Authentication: Users can create accounts and save their preferences for news categories."
      ],
      additionalInfo: "This project was developed to provide a modern, responsive news platform using cutting-edge technologies like React and Vite, which provides faster build times and better performance. It also utilizes Node.js and Express.js for backend services, ensuring smooth API integrations.",
    },
    
    {
      id: "2",
      title: "Real-Time-Chat App",
      description: "A dynamic real-time chat application that enables users to create accounts, engage in one-on-one conversations, and share text messages and images. The app uses Socket.io for real-time communication, delivering instant updates and notifications. Built with React.js for a responsive design, it ensures users can chat anytime, anywhere.",
      link: "https://chating-with-anyone.vercel.app/",
      image: "https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/s4lbu3ucpclmxhkg5y79",
      technologies: ["React", "Node.js", "Express", "MongoDB","Socket.io"],
    
        features: [
          "Real-Time Chat: Instant messaging with support for media sharing (images and text)..",
         " Online Status: Users can see which friends are online and available for chat.",
         " Responsive Design: Built using React.js for a dynamic, mobile-friendly interface.",
          "Backend Integration: Node.js and Express.js for API development and MongoDB for storing user data and chat history.",
          "User Authentication: Users can create accounts and login.",
      ],
     
    },
    
    {
      id: "3",
      title: "Women's Clothing App",
      description:'The Women\'s Clothing E-commerce Website is a comprehensive and user-friendly online shopping platform designed specifically for women who are passionate about fashion and want access to the latest trends, stylish apparel, and trendy accessories. This platform offers a curated selection of high-quality clothing, from casual wear to elegant evening outfits, making it the go-to destination for every fashion-forward woman.The website is designed with a seamless shopping experience in mind, ensuring users can easily browse through an extensive range of products, filter by size, color, style, and price, and make secure purchases. The intuitive and responsive design is optimized for all devices, whether you\'re shopping from your desktop, tablet, or smartphone, ensuring a smooth and enjoyable experience on every screen.', 
      link: "https://womens-clothes-store.vercel.app",
      image: "https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/q7ibl9x5sm31kvn4wxdq",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    
        features: [
          "Wide Range of Fashionable Apparel: Offers a diverse collection of clothing, including dresses, tops, skirts, pants, outerwear, and more, catering to different tastes, body types, and occasions.",
         " Instant Discounts for Wholesale Customers: Special pricing and discounts are automatically applied when bulk purchases are made.",
         " Simple Checkout Process: Only essential information (name, address, and phone number) is required for checkout.",
          "No Login/Signup Required: Users can shop and place orders without needing to register or log in..",
          "User Authentication: Admin can login.",
      ],
      additionalInfo: "This e-commerce platform was built to cater to both wholesale and retail customers, making it suitable for various business models. It helps businesses reach both small and large customers by offering an easy-to-use interface and a smooth buying experience.",
    },
    
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="project-detail container mx-auto p-4">
      {/* Project Image */}
      {project.image && <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />}

      <h2 className="text-3xl text-center text-black mb-6">{project.title}</h2>

      <p className="text-black mb-4">{project.description}</p>

      {/* Technologies List */}
      <div className="technologies mb-4">
        <h3 className="text-xl text-black">Technologies Used:</h3>
        <ul className="list-disc pl-6 text-black">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Features List */}
      <div className="features mb-4">
        <h3 className="text-xl text-black">Key Features:</h3>
        <ul className="list-disc pl-6 text-black">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Additional Info */}
      {project.additionalInfo && (
        <div className="additional-info mb-4">
          <h3 className="text-xl text-black">Additional Information:</h3>
          <p className="text-black">{project.additionalInfo}</p>
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Visit Project
      </a>
    </div>
    </>
  );
};

export default ProjectDetail;