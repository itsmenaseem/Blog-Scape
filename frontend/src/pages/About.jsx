import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white text-gray-800 rounded-lg shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        {/* Profile Picture */}

        {/* About Content */}
        <div className="text-center md:text-left md:ml-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Hi, I'm Deepak Singla</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I'm a full-stack developer passionate about building impactful web applications. With experience in front-end and back-end technologies, I specialize in crafting both the user experience and the server-side logic.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I thrive in environments that challenge my problem-solving skills and allow me to learn new technologies. Whether I'm working with React for sleek, responsive UIs or Node.js for scalable back-end solutions, my focus is always on creating solutions that are both functional and elegant.
          </p>

          {/* Skills Section */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                <i className="fas fa-laptop-code text-3xl"></i>
              </div>
              <p className="mt-2 text-gray-800">Full-Stack</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-teal-500 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                <i className="fas fa-database text-3xl"></i>
              </div>
              <p className="mt-2 text-gray-800">Databases</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                <i className="fas fa-cloud text-3xl"></i>
              </div>
              <p className="mt-2 text-gray-800">Cloud Services</p>
            </div>
          </div>

          {/* Call-to-Action Button */}
        </div>
      </div>
    </div>
  );
}

export default About;