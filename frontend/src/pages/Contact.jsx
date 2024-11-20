import React from 'react';

function Contact() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-2xl p-6 md:p-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Contact Me
        </h1>
        
        <p className="text-sm md:text-base text-gray-700 text-center mb-4">
          I would love to hear from you! Whether you have a question, want to collaborate, or just want to connect, feel free to reach out.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-700"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="4"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
