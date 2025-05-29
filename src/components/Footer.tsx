import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-aos="fade-up" className="bg-black text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Main Content Area */}
          <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-row lg:space-x-16 xl:space-x-32 w-full lg:w-auto">
            {/* Brand and Navigation */}
            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8">Eclypse</h3>
              
              {/* Navigation Links */}
              <nav className="space-y-2 sm:space-y-3">
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">Home</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">About</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">Buy</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">Our Customers</a></div>
                <div><a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">Contacts</a></div>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-0">
              {/* Phone */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 sm:mb-3">CONTACT</h4>
                <p className="text-white text-base sm:text-lg">+91 123-456-7890</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 sm:mb-3">EMAIL</h4>
                <p className="text-white text-base sm:text-lg">eclypse@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Scroll to top button */}
          <div className="flex justify-center sm:justify-end lg:justify-start lg:mt-0 mb-8 lg:mb-0">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex justify-center sm:justify-end">
            <p className="text-gray-400 text-xs sm:text-sm">© Eclypse 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};