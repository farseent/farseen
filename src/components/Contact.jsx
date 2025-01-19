import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-black text-white flex flex-col justify-center px-6 md:px-10"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0aff9d] mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col justify-between m-24 pl-16">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#0aff9d] text-2xl" />
              <p className="text-xl">+91 7736146247</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#0aff9d] text-2xl" />
              <p className="text-xl">farseen.ft@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#0aff9d] text-2xl" />
              <p className="text-xl">Malappuram, Kerala, India</p>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aff9d]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aff9d]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aff9d]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#0aff9d] text-black font-bold rounded-md hover:bg-[#05e586] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
