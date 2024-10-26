import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Contact</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Feel free to reach out for collaborations or just a friendly chat.
      </p>
      <a 
        href="acharjeedeep09@gmail.com" 
        className="mt-8 inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
}

export default Contact;
