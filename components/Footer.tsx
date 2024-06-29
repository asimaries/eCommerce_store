// components/Footer.js
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={`footer bg-gray-800 text-white py-4 text-center`}>
      <div className="mb-4">
        <p>Contact us: <a href="mailto:contact@yourcompany.com" className="text-blue-400">contact@yourcompany.com</a></p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/craftby_riva/?igsh=MXcwaG5jdXhvMHMzeQ%3D%3D" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram_logo.png" alt="Instagram" width={40} height={40} />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook_logo.png" alt="Facebook" width={40} height={40} />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp_logo.png" alt="WhatsApp" width={40} height={40} />
        </a>
      </div>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;