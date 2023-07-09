import React, { useState } from 'react';
import logo from "../img/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50" style={{backgroundColor:'#1f5473'}}>
      <div className="max-w-7xl mx-auto px-6 lg:py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-semibold">FoodHub</a>
          {/* <img src={logo} alt="Logo" class="object-contain w-16 h-16" /> */}
          </div>

          <div className="md:hidden">
            <button
              className="focus:outline-none px-4 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className={`hidden md:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-200 hover:bg-slate-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              {/* <a href="#" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-200 hover:bg-slate-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          {/* <a href="#" className="text-gray-200 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-200 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
