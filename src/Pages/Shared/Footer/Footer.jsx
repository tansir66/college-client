import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Contact Us</p>
        <p className="text-sm mt-2">123 College Street, City, Country</p>
        <p className="text-sm">Email: info@examplecollege.com</p>
        <p className="text-sm">Phone: +1 123-456-7890</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-white hover:text-purple-200 mr-4">
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a href="#" className="text-white hover:text-purple-200 mr-4">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="#" className="text-white hover:text-purple-200">
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div>
        <p className="mt-6 text-xs">
          &copy; {new Date().getFullYear()} Example College Info. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
