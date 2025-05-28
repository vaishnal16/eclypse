import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo-1.jpg"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-18 text-lg xl:text-2xl">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#waitlist"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Waitlist
            </a>
            <a
              href="#cart"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Cart
            </a>
            <button className="bg-white text-black px-4 xl:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium text-sm xl:text-base">
              Buy
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-3">
            <a
              href="#about"
              className="block text-white hover:text-gray-300 transition-colors duration-200 py-2 px-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#waitlist"
              className="block text-white hover:text-gray-300 transition-colors duration-200 py-2 px-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Waitlist
            </a>
            <a
              href="#cart"
              className="block text-white hover:text-gray-300 transition-colors duration-200 py-2 px-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
            </a>
            <div className="pt-2">
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};