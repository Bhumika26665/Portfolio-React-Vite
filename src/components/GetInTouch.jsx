import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    
    const { firstName, lastName, email, phone } = formData;

    // For now, display an alert with the form data
    alert(`Thank you ${firstName} ${lastName}! We have received your message and will contact you at ${email} or ${phone}.`);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = '+918817173959'; // WhatsApp phone number
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const emailAddress = 'pandeybhumika267@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink; // Opens default email client
  };

  return (
    <div id="contact" className="section">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left Section (Contact Info) */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-building text-lg text-indigo-500 mr-3"></i>
                  Prabhat Pattan District Betul(M.P)
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-phone-alt text-lg text-indigo-500 mr-3"></i>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick}
                    className="text-indigo-500 hover:text-indigo-700"
                    style={{ color: 'inherit' }}
                  >
                    +91 8817173959
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fas fa-envelope text-lg text-indigo-500 mr-3"></i>
                  <a
                    href="#"
                    onClick={handleEmailClick}
                    className="text-indigo-500 hover:text-indigo-700"
                    style={{ color: 'inherit' }}
                  >
                    pandeybhumika267@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section (Form) */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
