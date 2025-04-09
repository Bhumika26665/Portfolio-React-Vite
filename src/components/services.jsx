import React from 'react'

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card bg-white rounded-lg shadow-lg p-8 text-center">
    <div className="mb-4">
      <i className={`fas ${icon} text-orange-500 text-4xl`}></i>
    </div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

function Services() {
  const services = [
    {
      icon: "fa-code",
      title: "Development",
      description: "Web development involves creating dynamic and engaging websites using HTML, CSS, JavaScript, React, and Node.js."
    },
    {
      icon: "fa-desktop",
      title: "Responsive Design",
      description: "I ensure responsive designs that adapt to different screen sizes using HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind CSS."
    },
    {
      icon: "fa-tools",
      title: "Customized Solutions",
      description: "I deliver tailored web solutions with technologies such as HTML, CSS, JavaScript, React, and Node.js."
    },
    {
      icon: "fa-lightbulb",
      title: "Creative Design",
      description: "I focus on creating visually engaging designs that combine aesthetics with functionality."
    },
    {
      icon: "fa-laptop-code",
      title: "Web Design",
      description: "I create visually stunning and user-friendly websites with clean layouts and intuitive navigation."
    },
    {
      icon: "fa-headset",
      title: "Support",
      description: "I offer ongoing support services, including maintenance, updates, and troubleshooting for your website."
    },
  ]

  return (
    <div id="service" className="section">
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-lg text-gray-600">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
