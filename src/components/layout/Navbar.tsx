import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Landmark className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                Temple Guide
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Temples
            </Link>
            <Link to="/nearby" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Nearby Places
            </Link>
            <Link to="/hotels" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Hotels
            </Link>
            <Link to="/login" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </Link>
            <DarkModeToggle />
          </div>
          
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button 
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          <Link to="/" className="block text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/temples" className="block text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
            Temples
          </Link>
          <Link to="/nearby" className="block text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
            Nearby Places
          </Link>
          <Link to="/hotels" className="block text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
            Hotels
          </Link>
          <Link to="/login" className="block bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md text-base font-medium">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;