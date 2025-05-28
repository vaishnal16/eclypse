import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-aos="fade-up" className="bg-black text-white py-12 px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-start">
          {/* Left side - Brand and Navigation */}
          <div className="flex space-x-32">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light mb-8">Eclypse</h3>
              
              {/* Navigation Links */}
              <nav className="space-y-3">
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors">About</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors">Buy</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors">Our Customers</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors">Contacts</a></div>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3">CONTACT</h4>
                <p className="text-white text-lg">+91 123-456-7890</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3">EMAIL</h4>
                <p className="text-white text-lg">eclypse@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right side - Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-end">
            <p className="text-gray-400 text-sm">© Eclypse 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};