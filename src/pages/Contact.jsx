import React from "react";

const Contact = () => {
  return (
 <div className="my-10">
       <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
         Looking for a passionate front-end developer?
Let’s connect and build something amazing together!
        </p>
      </div>

 

      {/* Contact Info */}
      <div className="mt-10 text-center text-gray-700">
        <p>📍 Based in India</p>
        <p className="mt-1">
          📧{" "}
          <a
            href="mailto:safinabegum147@gmail.com"
            className="text-blue-600 hover:underline"
          >
            safinabegum147@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-blue-600 font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-blue-600 font-medium"
          >
            LinkedIn
          </a>
          
        </div>
      </div>
 </div>
  );
};

export default Contact;
