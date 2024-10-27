import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary 20vh text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Amina Abah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;